import { configureStore } from "@reduxjs/toolkit";
import { increment } from "./reducers/increment";

const store = configureStore({
  reducer: {
    increment,
  },
});

export default store;
