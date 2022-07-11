import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import switchReducer from "./features/switchSlice";

import { theMovieApi } from "./apis/TheMovieApi";

export const store = configureStore({
  reducer: {
    [theMovieApi.reducerPath]: theMovieApi.reducer,
    switch: switchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(theMovieApi.middleware),
});

setupListeners(store.dispatch);
