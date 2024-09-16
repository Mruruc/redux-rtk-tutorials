import { combineReducers, createStore } from "redux";
import authReducer from "../reducers/authReducer";
import counterReducer from "../reducers/counterReducer";
import dataFetchReducer from "../reducers/dataFetchReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
  dataFetch: dataFetchReducer,
});
const store = createStore(rootReducer);

export default store;
