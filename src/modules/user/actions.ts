import { IUser, UserUpdatePayload } from "@types";
import { createAction } from "typesafe-actions";

export const GET_REQUEST = "user/GET_REQUEST" as const;
export const GET_SUCCESS = "user/GET_SUCCESS" as const;
export const GET_FAILURE = "user/GET_FAILURE" as const;
export const UPDATE_REQUEST = "user/UPDATE_REQUEST" as const;
export const UPDATE_SUCCESS = "user/UPDATE_SUCCESS" as const;
export const UPDATE_FAILURE = "user/UPDATE_FAILURE" as const;

export const getRequest = createAction(GET_REQUEST)();
export const getSuccess = createAction(GET_SUCCESS)<IUser>();
export const getFailure = createAction(GET_FAILURE)();
export const updateRequest = createAction(UPDATE_REQUEST)<UserUpdatePayload>();
export const updateSuccess = createAction(UPDATE_SUCCESS)<IUser>();
export const updateFailure = createAction(UPDATE_FAILURE)();
