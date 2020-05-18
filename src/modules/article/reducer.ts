import { createReducer } from "typesafe-actions";
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  RESET_STATUS,
  GET_SINGLE_REQUEST,
  GET_SINGLE_SUCCESS,
  GET_SINGLE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  FAVORITE_REQUEST,
  FAVORITE_SUCCESS,
  FAVORITE_FAILURE,
  SET_ARTICLE,
} from "./actions";
import { TArticles, TArticle } from "@types";

interface TState {
  isInitialRendering: boolean;
  isLoading: boolean;
  isCreated: boolean;
  articles: TArticles;
  articlesCount: number;
  article: TArticle;
  error: boolean;
}

const initialState = {
  isInitialRendering: true,
  isLoading: false,
  isCreated: false,
  articles: [],
  articlesCount: 0,
  article: {} as TArticle,
  error: false,
};

const article = createReducer<TState>(initialState, {
  [CREATE_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [CREATE_SUCCESS]: (state, { payload }) => {
    return { ...state, article: payload, isLoading: false, isCreated: true };
  },
  [CREATE_FAILURE]: (state) => {
    return { ...state, isLoading: false, isCreated: false };
  },
  [RESET_STATUS]: (state) => {
    return {
      ...state,
      isLoading: false,
      isCreated: false,
      article: {} as TArticle,
      isInitialRendering: true,
    };
  },
  [GET_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [GET_SUCCESS]: (state, { payload }) => {
    return { ...state, ...payload, isLoading: false };
  },
  [GET_FAILURE]: (state) => {
    return { ...state, isLoading: false };
  },
  [GET_SINGLE_REQUEST]: (state) => {
    return { ...state, isLoading: true, isInitialRendering: true };
  },
  [GET_SINGLE_SUCCESS]: (state, { payload }) => {
    return { ...state, article: payload, isLoading: false };
  },
  [GET_SINGLE_FAILURE]: (state) => {
    return { ...state, isLoading: false };
  },
  [UPDATE_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [UPDATE_SUCCESS]: (state, { payload }) => {
    return { ...state, article: payload, isLoading: false, isCreated: true };
  },
  [UPDATE_FAILURE]: (state) => {
    return { ...state, isLoading: false, isCreated: false };
  },
  [DELETE_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [DELETE_SUCCESS]: (state) => {
    return {
      ...state,
      isLoading: false,
      article: {} as TArticle,
      isInitialRendering: false,
    };
  },
  [DELETE_FAILURE]: (state) => {
    return {
      ...state,
      isLoading: false,
      error: true,
      isInitialRendering: false,
    };
  },
  [FAVORITE_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [FAVORITE_SUCCESS]: (state) => {
    return { ...state, isLoading: false };
  },
  [FAVORITE_FAILURE]: (state) => {
    return { ...state, isLoading: false, error: true };
  },
  [SET_ARTICLE]: (state, action) => {
    return { ...state, article: action.payload };
  },
});

export default article;
