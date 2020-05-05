import {
  UPDATE_REQUEST,
  updateSuccess,
  updateFailure,
  GET_REQUEST,
  getSuccess,
  getFailure,
} from "@modules/user";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import { IUser } from "@types";
import session from "./session";

function* getUser() {
  try {
    const response = yield call(api.getUser, session.get("user").token);
    const { user } = yield call(api.handleResponse, response);
    yield put(getSuccess(user));
    return user;
  } catch (error) {
    console.warn(error);
    yield put(getFailure());
  }
}
export function* getFlow() {
  while (true) {
    yield take(GET_REQUEST);
    const user = yield call(getUser);
  }
}
function* updateUser(payload: IUser) {
  try {
    const response = yield call(
      api.updateUser,
      payload,
      session.get("user").token
    );
    const { user } = yield call(api.handleResponse, response);
    yield put(updateSuccess(user));
    return user;
  } catch (error) {
    console.warn(error);
    yield put(updateFailure());
  }
}
export function* updateFlow() {
  while (true) {
    const { payload } = yield take(UPDATE_REQUEST);
    const user = yield call(updateUser, payload);
  }
}
