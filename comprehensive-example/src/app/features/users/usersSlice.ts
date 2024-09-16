import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRequest } from "../../../api/api-calls";
import { User, UserState } from "../../../types/global";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (uri: string) => {
    return await getRequest<User[]>(uri);
  }
);

const initialState: UserState = {
  isLoading: false,
  error: null,
  users: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        name: keyof typeof initialState.filters;
        value: string;
      }>
    ) => {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload || [];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "An error occurred while fetching users";
      });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
