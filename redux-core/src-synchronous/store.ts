import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { counterReducer, getUserReducer, userReducer } from "./reducers";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  getUser: getUserReducer,
});
// @ts-ignore
const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
