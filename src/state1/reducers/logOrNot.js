import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  flag: false,
};

export const checkStatus = createReducer(initialState, {
  makeTrue: (state, action) => {
    state.flag = true;
  },

  makeFalse: (state) => {
    state.flag = false;
  },
});
