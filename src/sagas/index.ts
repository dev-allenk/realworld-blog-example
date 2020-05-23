import { all, call } from "redux-saga/effects";
import * as auth from "./auth";
import * as user from "./user";
import * as article from "./article";
import * as profile from "./profile";

export default function* rootSaga() {
  yield all([
    call(auth.loginFlow),
    call(auth.loginCheckFlow),
    call(auth.registerFlow),
    call(user.getFlow),
    call(user.updateFlow),
    call(article.createFlow),
    call(article.getFlow),
    call(article.getSingleFlow),
    call(article.updateFlow),
    call(article.deleteFlow),
    call(article.favoriteFlow),
    call(profile.getFlow),
  ]);
}
