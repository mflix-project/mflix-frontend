/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

let theaters = createSlice({
  name: "theaters",
  initialState: null,
  reducers: {
    saveTheaters(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export let { saveTheaters } = theaters.actions;

export default theaters;
