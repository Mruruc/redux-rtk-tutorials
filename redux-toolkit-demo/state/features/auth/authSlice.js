import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setLoginCredentials: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setLoginCredentials } = authSlice.actions;

export default authSlice.reducer;
