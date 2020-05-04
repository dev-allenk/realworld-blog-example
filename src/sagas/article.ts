import {
  CREATE_REQUEST,
  createSuccess,
  createFailure,
  GET_REQUEST,
  getSuccess,
  getFailure,
} from "@modules/article";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import session from "./session";
import { TArticlePayload } from "@types";

function* createArticle(articlePayload: TArticlePayload) {
  try {
    const response = yield call(
      api.createArticle,
      articlePayload,
      session.get("token")
    );
    const { article } = yield call(api.handleResponse, response);
    yield put(createSuccess(article));
    return article;
  } catch (error) {
    console.warn(error);
    yield put(createFailure());
  }
}
export function* createFlow() {
  while (true) {
    const { payload } = yield take(CREATE_REQUEST);
    const article = yield call(createArticle, payload);
  }
}
function* getArticles() {
  try {
    const response = yield call(api.getArticles);
    const { articles } = yield call(api.handleResponse, response);
    yield put(getSuccess(articles));
    return articles;
  } catch (error) {
    console.warn(error);
    yield put(getFailure());
  }
}
export function* getFlow() {
  while (true) {
    const { payload } = yield take(GET_REQUEST);
    const article = yield call(getArticles);
  }
}
