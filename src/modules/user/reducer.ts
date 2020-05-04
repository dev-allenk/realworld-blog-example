import { createReducer } from "typesafe-actions";
import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  username: "",
  email: "",
  image: "",
  bio: "",
};

const user = createReducer(initialState, {
  [UPDATE_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [UPDATE_SUCCESS]: (state, { payload }) => {
    return { ...state, ...payload, isLoading: false };
  },
  [UPDATE_FAILURE]: (state, a) => {
    return { ...state, isLoading: false };
  },
  [GET_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [GET_SUCCESS]: (state, { payload }) => {
    return { ...state, ...payload, isLoading: false };
  },
  [GET_FAILURE]: (state, a) => {
    return { ...state, isLoading: false };
  },
});

export default user;
