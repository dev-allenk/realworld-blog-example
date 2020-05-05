import {
  LOGIN_CHECK_REQUEST,
  loginCheck,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure,
} from "@modules/auth";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import { LoginPayload, RegisterPayload } from "@types";
import session from "./session";

function* register(payload: RegisterPayload) {
  try {
    const response = yield call(api.register, payload);
    const { user } = yield call(api.handleResponse, response);
    yield put(registerSuccess(user));
    return user;
  } catch (error) {
    console.warn(error);
    yield put(registerFailure());
  }
}
export function* registerFlow() {
  while (true) {
    const { payload } = yield take(REGISTER_REQUEST);
    const user = yield call(register, payload);
    if (user) {
      yield call(session.set, "user", user);
    }
  }
}

function* login(payload: LoginPayload) {
  try {
    const response = yield call(api.login, payload);
    const { user } = yield call(api.handleResponse, response);
    yield put(loginSuccess(user));
    return user;
  } catch (error) {
    console.warn(error);
    yield put(loginFailure());
  }
}

function* logout() {
  try {
    yield call(session.remove, "user");
    yield put(logoutSuccess());
  } catch (error) {
    console.warn(error);
    yield put(logoutFailure());
  }
}
export function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST);
    const user = yield call(login, payload);
    if (user) {
      yield call(session.set, "user", user);
      yield take(LOGOUT_REQUEST);
      yield call(logout);
    }
  }
}
function* localLogin() {
  try {
    const user = yield call(session.get, "user");
    console.log(user);
    if (user) {
      yield put(loginCheck.success(user));
    } else {
      yield put(loginCheck.failure());
    }
    return user;
  } catch (error) {
    console.warn(error);
    yield put(loginCheck.failure());
  }
}
export function* loginCheckFlow() {
  while (true) {
    yield take(LOGIN_CHECK_REQUEST);
    const token = yield call(localLogin);
  }
}
