import { createReducer } from "typesafe-actions";
import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE } from "./actions";

const initialState = {
  isLoading: false,
};

const user = createReducer(initialState, {
  [CREATE_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [CREATE_SUCCESS]: (state) => {
    return { isLoading: false };
  },
  [CREATE_FAILURE]: (state, a) => {
    return { ...state, isLoading: false };
  },
});

export default user;
