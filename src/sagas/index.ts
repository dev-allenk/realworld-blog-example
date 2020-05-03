import { all, call } from "redux-saga/effects";
import * as auth from "./auth";
import * as user from "./user";

export default function* rootSaga() {
  yield all([
    call(auth.loginFlow),
    call(auth.registerFlow),
    call(user.getFlow),
    call(user.updateFlow),
  ]);
}
