//Import configure store
import { configureStore } from "@reduxjs/toolkit";
import { increment, decrement } from "../../slices/counterSlice";

//import our combined reducer
import { counterCombinedReducer } from "../../slices/counterSlice";

//create store
export const store = configureStore({
  reducer: { counterCombinedReducer }, //naming has to be reducer in this object
});

export { increment, decrement };
