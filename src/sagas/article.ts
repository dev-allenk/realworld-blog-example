import {
  CREATE_REQUEST,
  createSuccess,
  createFailure,
  GET_REQUEST,
  getSuccess,
  getFailure,
  GET_SINGLE_REQUEST,
  getSingleArticle,
  DELETE_REQUEST,
  deleteArticle,
  UPDATE_REQUEST,
  updateArticle,
} from "@modules/article";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import session from "./session";
import { TArticlePayload, TGetArticlesPayload } from "@types";

function* _createArticle(articlePayload: TArticlePayload) {
  try {
    const response = yield call(
      api.createArticle,
      articlePayload,
      session.get("user").token
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
    const article = yield call(_createArticle, payload);
  }
}
function* _getArticles({ shouldGetFeeds, query }: TGetArticlesPayload) {
  try {
    const response = shouldGetFeeds
      ? yield call(api.getFeeds, session.get("user").token)
      : yield call(api.getArticles, query);
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
    const article = yield call(_getArticles, payload);
  }
}

function* _getArticle(slug: string) {
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
    const article = yield call(_getArticle, payload);
  }
}

function* _updateArticle(slug: string, articlePayload: TArticlePayload) {
  try {
    const response = yield call(
      api.updateArticle,
      slug,
      articlePayload,
      session.get("user").token
    );
    const { article } = yield call(api.handleResponse, response);
    yield put(updateArticle.success(article));
    return article;
  } catch (error) {
    console.warn(error);
    yield put(updateArticle.failure());
  }
}
export function* updateFlow() {
  while (true) {
    const {
      payload: { slug, ...article },
    } = yield take(UPDATE_REQUEST);
    yield call(_updateArticle, slug, article);
  }
}
function* _deleteArticle(slug: string) {
  try {
    const response = yield call(
      api.deleteArticle,
      slug,
      session.get("user").token
    );
    yield call(api.handleResponse, response);
    yield put(deleteArticle.success());
  } catch (error) {
    console.warn(error);
    yield put(deleteArticle.failure());
  }
}
export function* deleteFlow() {
  while (true) {
    const { payload }: { payload: string } = yield take(DELETE_REQUEST);
    yield call(_deleteArticle, payload);
  }
}
