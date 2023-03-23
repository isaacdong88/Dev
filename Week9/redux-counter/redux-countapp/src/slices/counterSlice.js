//Import creatslice
import { createSlice } from "@reduxjs/toolkit";

//Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      return { ...state, counter: state.counter + 1 };
    },
    decrement(state, action) {
      return { ...state, counter: state.counter - 1 };
    },
  },
});

//Export reducer and action creators
export const { increment, decrement } = counterSlice.actions;
export const counterCombinedReducer = counterSlice.reducer;
