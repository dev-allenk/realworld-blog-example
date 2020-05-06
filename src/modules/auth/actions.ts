import { IUser, RegisterPayload, LoginPayload } from "@types";
import { createAction, createAsyncAction } from "typesafe-actions";

export const REGISTER_REQUEST = "auth/REGISTER_REQUEST" as const;
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS" as const;
export const REGISTER_FAILURE = "auth/REGISTER_FAILURE" as const;
export const LOGIN_REQUEST = "auth/LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "auth/LOGIN_FAILURE" as const;
export const LOGOUT_REQUEST = "auth/LOGOUT_REQUEST" as const;
export const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS" as const;
export const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE" as const;
export const LOGIN_CHECK_REQUEST = "auth/LOGIN_CHECK_REQUEST" as const;
export const LOGIN_CHECK_SUCCESS = "auth/LOGIN_CHECK_SUCCESS" as const;
export const LOGIN_CHECK_FAILURE = "auth/LOGIN_CHECK_FAILURE" as const;

export const registerRequest = createAction(REGISTER_REQUEST)<
  RegisterPayload
>();
export const registerSuccess = createAction(REGISTER_SUCCESS)<IUser>();
export const registerFailure = createAction(REGISTER_FAILURE)();
export const loginRequest = createAction(LOGIN_REQUEST)<LoginPayload>();
export const loginSuccess = createAction(LOGIN_SUCCESS)<IUser>();
export const loginFailure = createAction(LOGIN_FAILURE)();
export const logoutRequest = createAction(LOGOUT_REQUEST)();
export const logoutSuccess = createAction(LOGOUT_SUCCESS)();
export const logoutFailure = createAction(LOGOUT_FAILURE)();

export const loginCheck = createAsyncAction(
  LOGIN_CHECK_REQUEST,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAILURE
)<undefined, IUser, undefined>();
