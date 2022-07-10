import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../utils";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3",
  prepareHeaders: (headers) => prepareHeaders(headers, true),
});

export const theMovieApi = createApi({
  reducerPath: "theMovieApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTheMovieDetailApi: builder.query({
      query: (id) => ({
        url: `/movie/${id}`,
        method: "GET",
      }),
    }),
    getTheMovieReleaseDatesApi: builder.query({
      query: (id) => ({
        url: `/movie/${id}/release_dates`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetTheMovieDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
} = theMovieApi;
