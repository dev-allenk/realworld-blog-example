import createSagaMiddleware from "redux-saga";
import { MakeStore } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import { rootReducer, RootState } from "../modules";

export const makeStore: MakeStore = (initialState: RootState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
