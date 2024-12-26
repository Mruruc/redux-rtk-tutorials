import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { userReducer } from "../reducers/userReducer";

const reducers = combineReducers({
  users: userReducer,
});
// @ts-ignore
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;

export type RootState = ReturnType<typeof store.getState>;
