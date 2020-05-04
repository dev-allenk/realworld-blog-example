import { createReducer } from "typesafe-actions";
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  RESET_STATUS,
} from "./actions";
import { TArticles } from "@types";

interface TState {
  isLoading: boolean;
  isCreated: boolean;
  articles?: TArticles;
}

const initialState = {
  isLoading: false,
  isCreated: false,
  articles: [],
};

const article = createReducer<TState>(initialState, {
  [CREATE_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [CREATE_SUCCESS]: (state) => {
    return { ...state, isLoading: false, isCreated: true };
  },
  [CREATE_FAILURE]: (state) => {
    return { ...state, isLoading: false, isCreated: false };
  },
  [RESET_STATUS]: (state) => {
    return { ...state, isLoading: false, isCreated: false };
  },
  [GET_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [GET_SUCCESS]: (state, { payload }) => {
    return { ...state, articles: payload, isLoading: false };
  },
  [GET_FAILURE]: (state) => {
    return { ...state, isLoading: false };
  },
});

export default article;
