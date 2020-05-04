import { TArticlePayload, TArticle, TArticles } from "@types";
import { createAction } from "typesafe-actions";

export const CREATE_REQUEST = "article/CREATE_REQUEST" as const;
export const CREATE_SUCCESS = "article/CREATE_SUCCESS" as const;
export const CREATE_FAILURE = "article/CREATE_FAILURE" as const;
export const GET_REQUEST = "article/GET_REQUEST" as const;
export const GET_SUCCESS = "article/GET_SUCCESS" as const;
export const GET_FAILURE = "article/GET_FAILURE" as const;
//TODO: 단일 article 받아오는 api와 구분 필요
export const RESET_STATUS = "article/RESET_STATUS" as const;

export const createRequest = createAction(CREATE_REQUEST)<TArticlePayload>();
export const createSuccess = createAction(CREATE_SUCCESS)<TArticle>();
export const createFailure = createAction(CREATE_FAILURE)();
export const getRequest = createAction(GET_REQUEST)();
export const getSuccess = createAction(GET_SUCCESS)<TArticles>();
export const getFailure = createAction(GET_FAILURE)();
export const resetStatus = createAction(RESET_STATUS)();
