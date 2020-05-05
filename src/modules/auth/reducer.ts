import { createReducer } from "typesafe-actions";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_CHECK_REQUEST,
  LOGIN_CHECK_SUCCESS,
  LOGIN_CHECK_FAILURE,
} from "./actions";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  username: "",
  email: "",
};

const auth = createReducer(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [LOGIN_SUCCESS]: (state, { payload: { username, email } }) => {
    return { username, email, isLoggedIn: true, isLoading: false };
  },
  [LOGIN_FAILURE]: (state, a) => {
    return { ...state, isLoggedIn: false, isLoading: false };
  },
  [LOGOUT_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [LOGOUT_SUCCESS]: (state) => {
    return { ...state, isLoggedIn: false, isLoading: false };
  },
  [LOGOUT_FAILURE]: (state) => {
    return { ...state, isLoading: false };
  },
  [LOGIN_CHECK_REQUEST]: (state) => {
    return { ...state, isLoading: true };
  },
  [LOGIN_CHECK_SUCCESS]: (state, { payload: { username, email } }) => {
    return { ...state, username, email, isLoggedIn: true, isLoading: false };
  },
  [LOGIN_CHECK_FAILURE]: (state) => {
    return { ...state, isLoading: false };
  },
});

export default auth;
