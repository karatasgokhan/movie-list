import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "./features/counter/counterSlice";
import { theMovieApi } from "./apis/TheMovieApi";

export const store = configureStore({
  reducer: {
    [theMovieApi.reducerPath]: theMovieApi.reducer,
    counterSlice: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(theMovieApi.middleware),
});

setupListeners(store.dispatch);
