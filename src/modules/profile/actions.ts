import { TProfile } from "@types";
import { createAsyncAction, createAction } from "typesafe-actions";

export const GET_REQUEST = "profile/GET_REQUEST" as const;
export const GET_SUCCESS = "profile/GET_SUCCESS" as const;
export const GET_FAILURE = "profile/GET_FAILURE" as const;
export const RESET_PROFILE = "profile/RESET_PROFILE" as const;

export const getProfile = createAsyncAction(
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE
)<string, TProfile, undefined>();

export const resetProfile = createAction(RESET_PROFILE)();
