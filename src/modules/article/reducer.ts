import { createReducer } from "typesafe-actions";
import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  RESET_STATUS,
} from "./actions";

const initialState = {
  isLoading: false,
  isCreated: false,
};

const user = createReducer(initialState, {
  [CREATE_REQUEST]: (state, action) => {
    return { ...state, isLoading: true };
  },
  [CREATE_SUCCESS]: (state) => {
    return { ...state, isLoading: false, isCreated: true };
  },
  [CREATE_FAILURE]: (state, a) => {
    return { ...state, isLoading: false, isCreated: false };
  },
  [RESET_STATUS]: (state, action) => {
    return { ...state, isLoading: false, isCreated: false };
  },
});

export default user;
