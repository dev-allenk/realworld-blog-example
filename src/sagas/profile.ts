import { GET_REQUEST, getProfile } from "@modules/profile";
import { take, call, put } from "redux-saga/effects";
import api from "@api";
import session from "./session";

function* _getProfile(username: string) {
  try {
    const response = yield call(
      api.getProfile,
      username,
      session.get("user")?.token
    );
    const { profile } = yield call(api.handleResponse, response);
    yield put(getProfile.success(profile));
    return profile;
  } catch (error) {
    console.warn(error);
    yield put(getProfile.failure());
  }
}
export function* getFlow() {
  while (true) {
    const { payload } = yield take(GET_REQUEST);
    yield call(_getProfile, payload);
  }
}
