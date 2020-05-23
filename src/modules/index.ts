import { combineReducers } from "redux";
import auth, { AuthAction } from "./auth";
import user, { UserAction } from "./user";
import article, { ArticleAction } from "./article";
import profile, { ProfileAction } from "./profile";

export const rootReducer = combineReducers({ auth, user, article, profile });

export type RootState = ReturnType<typeof rootReducer>;

declare module "typesafe-actions" {
  interface Types {
    RootAction: AuthAction | UserAction | ArticleAction | ProfileAction;
  }
}
