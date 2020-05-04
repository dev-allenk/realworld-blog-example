import { combineReducers } from "redux";
import auth, { AuthAction } from "./auth";
import user, { UserAction } from "./user";
import article, { ArticleAction } from "./article";

export const rootReducer = combineReducers({ auth, user, article });

export type RootState = ReturnType<typeof rootReducer>;

declare module "typesafe-actions" {
  interface Types {
    RootAction: AuthAction | UserAction | ArticleAction;
  }
}
