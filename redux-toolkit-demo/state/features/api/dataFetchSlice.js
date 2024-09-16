import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "usersDataFetch/fetchUsers",
  async (URI, thunkAPI) => {
    try {
      const response = await fetch(URI);
      if (!response.ok)
        return thunkAPI.rejectWithValue(
          `Error fetching data: ${response.status} ${response.statusText}`
        );
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const dataFetchSlice = createSlice({
  name: "usersDataFetch",
  initialState: {
    isLoading: false,
    error: null,
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong ...";
      });
  },
});

export default dataFetchSlice.reducer;
