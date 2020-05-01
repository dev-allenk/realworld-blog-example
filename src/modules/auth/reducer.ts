import { createReducer } from "typesafe-actions";
import { AuthState, AuthAction } from "./types";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  username: "",
  email: "",
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [LOGIN_SUCCESS]: (state, { payload: { username, email } }) => {
    return { username, email, isLoggedIn: true, isLoading: false };
  },
  [LOGIN_FAILURE]: (state, a) => {
    return { ...state, isLoggedIn: false, isLoading: false };
  },
});

export default auth;
