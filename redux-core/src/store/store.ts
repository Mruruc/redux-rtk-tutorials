import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export default store;

//export type RootState = ReturnType<typeof store.getState>;
