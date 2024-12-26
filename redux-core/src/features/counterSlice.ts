import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action: PayloadAction<number | undefined>) {
      state.counter = state.counter + (action.payload ?? 1);
    },
    decrement(state, action: PayloadAction<number | undefined>) {
      state.counter = state.counter - (action.payload ?? 1);
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
