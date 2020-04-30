import { all, call } from "redux-saga/effects";
import { loginFlow, registerFlow } from "./auth";

export default function* rootSaga() {
  yield all([call(loginFlow), call(registerFlow)]);
}
