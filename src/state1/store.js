import { configureStore } from "@reduxjs/toolkit";
import { Numincrement } from "./reducers/increment";
import { checkStatus } from "./reducers/logOrNot";

const store = configureStore({
  reducer: {
    Numincrement,
    checkStatus,
  },
});

export default store;
