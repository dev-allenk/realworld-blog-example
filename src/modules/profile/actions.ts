import { TProfile } from "@types";
import { createAsyncAction } from "typesafe-actions";

export const GET_REQUEST = "profile/GET_REQUEST" as const;
export const GET_SUCCESS = "profile/GET_SUCCESS" as const;
export const GET_FAILURE = "profile/GET_FAILURE" as const;

export const getProfile = createAsyncAction(
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE
)<string, TProfile, undefined>();
