/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

let movies = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    saveMovies(state, action) {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export let { saveMovies } = movies.actions;

export default movies;