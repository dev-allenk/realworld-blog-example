import { ArticlePayload, Article } from "@types";
import { createAction } from "typesafe-actions";

export const CREATE_REQUEST = "article/CREATE_REQUEST" as const;
export const CREATE_SUCCESS = "article/CREATE_SUCCESS" as const;
export const CREATE_FAILURE = "article/CREATE_FAILURE" as const;

export const createRequest = createAction(CREATE_REQUEST)<ArticlePayload>();
export const createSuccess = createAction(CREATE_SUCCESS)<Article>();
export const createFailure = createAction(CREATE_FAILURE)();
