import createSagaMiddleware from "redux-saga";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import { rootReducer, RootState } from "../modules";

export const makeStore: MakeStore<RootState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, {
  debug: process.env.NODE_ENV === "development" ? true : false,
});
