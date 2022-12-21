const { createReducer } = require("@reduxjs/toolkit");

const initialState = {
  a: 1,
};

export const Numincrement = createReducer(initialState, {
  incrementNum: (state, action) => {
    console.log(action.payload);
    state.a += parseInt(action.payload[0]);
  },
  decrementNum: (state, action) => {
    console.log(action.payload);

    state.a -= parseInt(action.payload[0]);
  },
});
