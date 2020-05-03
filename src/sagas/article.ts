import { CREATE_REQUEST, createSuccess, createFailure } from "@modules/article";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import session from "./session";
import { ArticlePayload } from "@types";

function* createArticle(articlePayload: ArticlePayload) {
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
