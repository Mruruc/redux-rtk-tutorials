/* import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import counterReducer from "../reducers/counterReducer";
import dataFetchReducer from "../reducers/dataFetchReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
  dataFetch: dataFetchReducer,
});
const store = createStore(rootReducer);

export default store; */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import dataFetchReducer from "../features/api/dataFetchSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    dataFetch: dataFetchReducer,
  },
});

export default store;
