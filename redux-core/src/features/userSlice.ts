import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types";

export interface InitialStateType<T = any> {
  loading: boolean;
  errorMessage?: string;
  data: T[];
}

const initialState: InitialStateType<User> = {
  loading: false,
  errorMessage: "",
  data: [],
};

const URI = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  return (await axios.get(URI)).data;
});

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.errorMessage = action.error.message;
      });
  },
});

export default userSlice.reducer;