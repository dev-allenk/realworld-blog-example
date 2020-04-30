import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
} from "../modules/auth";
import { take, call, put } from "redux-saga/effects";
import api, { LoginPayload, RegisterPayload } from "../api";
import session from "./session";

function* register(payload: RegisterPayload) {
  try {
    const response = yield call(api.register, payload);
    if (!response.ok) {
      throw Error(yield response.json().errors); //TODO: errors객체 내용에 따라 화면에 에러 상황 출력
    }
    const { user } = yield response.json();
    yield put(registerSuccess(user));
    return user;
  } catch (error) {
    yield put(registerFailure());
  }
}
export function* registerFlow() {
  while (true) {
    const { payload } = yield take(REGISTER_REQUEST);
    const user = yield call(register, payload);
    if (user) {
      yield call(session.set, "token", user.token);
    }
  }
}

function* login(payload: LoginPayload) {
  try {
    const response = yield call(api.login, payload);
    if (!response.ok) {
      throw Error(yield response.json().errors); //TODO: errors객체 내용에 따라 화면에 에러 상황 출력
    }
    const { user } = yield response.json();
    yield put(loginSuccess(user));
    return user;
  } catch (error) {
    yield put(loginFailure());
  }
}

export function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST);
    const user = yield call(login, payload);
    if (user) {
      yield call(session.set, "token", user.token);
    }
  }
}
