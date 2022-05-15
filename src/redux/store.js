/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import movies from "./slice/movieSlice";
import theaters from "./slice/theaterSlice";

export default configureStore({
  reducer: {
    movies: movies.reducer,
    theaters: theaters.reducer,
  },
});
