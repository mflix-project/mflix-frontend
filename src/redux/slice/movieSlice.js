/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

let movies = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    save(state, action) {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export let { save } = movies.actions;

export default movies;
