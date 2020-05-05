import {
  CREATE_REQUEST,
  createSuccess,
  createFailure,
  GET_REQUEST,
  getSuccess,
  getFailure,
  GET_SINGLE_REQUEST,
  getSingleArticle,
} from "@modules/article";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import session from "./session";
import { TArticlePayload, TGetArticlesPayload } from "@types";

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
function* getArticles({ shouldGetFeeds, offset }: TGetArticlesPayload) {
  try {
    const response = shouldGetFeeds
      ? yield call(api.getFeeds, session.get("token"))
      : yield call(api.getArticles, offset);
    const { articles, articlesCount } = yield call(
      api.handleResponse,
      response
    );
    yield put(getSuccess({ articles, articlesCount }));
    return articles;
  } catch (error) {
    console.warn(error);
    yield put(getFailure());
  }
}
export function* getFlow() {
  while (true) {
    const { payload } = yield take(GET_REQUEST);
    const article = yield call(getArticles, payload);
  }
}

function* getArticle(slug: string) {
  try {
    const response = yield call(api.getSingleArticle, slug);
    const { article } = yield call(api.handleResponse, response);
    yield put(getSingleArticle.success(article));
    return article;
  } catch (error) {
    console.warn(error);
    yield put(getSingleArticle.failure());
  }
}
export function* getSingleFlow() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_REQUEST);
    const article = yield call(getArticle, payload);
  }
}
