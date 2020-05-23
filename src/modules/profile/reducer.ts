import { createReducer } from "typesafe-actions";
import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from "./actions";

const initialState = {
  isLoading: false,
  username: "",
  image: "",
  bio: "",
  following: false,
};

const profile = createReducer(initialState, {
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

export default profile;
