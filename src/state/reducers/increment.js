import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  a: 10,
  b: 20,
  c: 3434,
};

export const increment = createReducer(initialState, {
  incrementNum: (state, action) => {
    state.a += 1;
  },
  decrementNum: (state, action) => {
    state.a -= 2;
  },
  devideNum: (state, action) => {
    state.a /= 2;
  },
  multiplyNum: (state, action) => {
    state.a *= 0;
  },
});
