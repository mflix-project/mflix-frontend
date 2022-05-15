/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import movies from "./slice/movieSlice";

export default configureStore({
  reducer: {
    movies: movies.reducer,
  },
});
