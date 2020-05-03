import { createReducer } from "typesafe-actions";
import { AuthState, AuthAction } from "./types";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [LOGIN_SUCCESS]: (s, a) => {
    return { isLoggedIn: true, isLoading: false };
  },
  [LOGIN_FAILURE]: (s, a) => {
    return { isLoggedIn: false, isLoading: false };
  },
});

export default auth;
