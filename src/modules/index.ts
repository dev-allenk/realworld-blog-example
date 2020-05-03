import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";

export const rootReducer = combineReducers({ auth, user });

export type RootState = ReturnType<typeof rootReducer>;
