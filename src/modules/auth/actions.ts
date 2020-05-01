import { RegisterPayload, LoginPayload } from "@api";
import { IUser } from "@types";
import { createAction } from "typesafe-actions";

export const REGISTER_REQUEST = "auth/REGISTER_REQUEST" as const;
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "auth/REGISTER_FAILURE" as const;
export const LOGIN_REQUEST = "auth/LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "auth/LOGIN_FAILURE" as const;

export const registerRequest = createAction(REGISTER_REQUEST)<
  RegisterPayload
>();
export const registerSuccess = createAction(REGISTER_SUCCESS)<IUser>();
export const registerFailure = createAction(REGISTER_FAILURE)();
export const loginRequest = createAction(LOGIN_REQUEST)<LoginPayload>();
export const loginSuccess = createAction(LOGIN_SUCCESS)<IUser>();
export const loginFailure = createAction(LOGIN_FAILURE)();
