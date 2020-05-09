import {
  TArticlePayload,
  TGetArticlesPayload,
  TArticle,
  TMultipleArticles,
  TUpdateArticlePayload,
} from "@types";
import { createAction, createAsyncAction } from "typesafe-actions";

export const CREATE_REQUEST = "article/CREATE_REQUEST" as const;
export const CREATE_SUCCESS = "article/CREATE_SUCCESS" as const;
export const CREATE_FAILURE = "article/CREATE_FAILURE" as const;
export const GET_REQUEST = "article/GET_REQUEST" as const;
export const GET_SUCCESS = "article/GET_SUCCESS" as const;
export const GET_FAILURE = "article/GET_FAILURE" as const;
export const GET_SINGLE_REQUEST = "article/GET_SINGLE_REQUEST" as const;
export const GET_SINGLE_SUCCESS = "article/GET_SINGLE_SUCCESS" as const;
export const GET_SINGLE_FAILURE = "article/GET_SINGLE_FAILURE" as const;
export const UPDATE_REQUEST = "article/UPDATE_REQUEST" as const;
export const UPDATE_SUCCESS = "article/UPDATE_SUCCESS" as const;
export const UPDATE_FAILURE = "article/UPDATE_FAILURE" as const;
export const DELETE_REQUEST = "article/DELETE_REQUEST" as const;
export const DELETE_SUCCESS = "article/DELETE_SUCCESS" as const;
export const DELETE_FAILURE = "article/DELETE_FAILURE" as const;
export const RESET_STATUS = "article/RESET_STATUS" as const;

export const createRequest = createAction(CREATE_REQUEST)<TArticlePayload>();
export const createSuccess = createAction(CREATE_SUCCESS)<TArticle>();
export const createFailure = createAction(CREATE_FAILURE)();
export const getRequest = createAction(GET_REQUEST)<TGetArticlesPayload>();
export const getSuccess = createAction(GET_SUCCESS)<TMultipleArticles>();
export const getFailure = createAction(GET_FAILURE)();
export const resetStatus = createAction(RESET_STATUS)();

export const getSingleArticle = createAsyncAction(
  GET_SINGLE_REQUEST,
  GET_SINGLE_SUCCESS,
  GET_SINGLE_FAILURE
)<string, TArticle, undefined>();

export const updateArticle = createAsyncAction(
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE
)<TUpdateArticlePayload, TArticle, undefined>();

export const deleteArticle = createAsyncAction(
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE
)<string, undefined, undefined>();
