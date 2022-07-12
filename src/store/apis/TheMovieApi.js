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
    //MOVIES & TV
    getTheMoviesAndTvApi: builder.query({
      query: (type) => ({
        url: `/${type}/popular`,
        method: "GET",
      }),
    }),
    //MOVIES & TV DETAIL
    getTheDetailApi: builder.query({
      query: ({ id, type }) => ({
        url: `/${type}/${id}`,
        method: "GET",
      }),
    }),
    getTheCreditsApi: builder.query({
      query: ({ id, type }) => ({
        url: `/${type}/${id}/credits`,
        method: "GET",
      }),
    }),
    getTheProvidersApi: builder.query({
      query: ({ id, type }) => ({
        url: `/${type}/${id}/watch/providers`,
        method: "GET",
      }),
    }),
    //MOVIE
    getTheMovieReleaseDatesApi: builder.query({
      query: (id) => ({
        url: `/movie/${id}/release_dates`,
        method: "GET",
      }),
    }),
    //TV
    getTheTVRatingsApi: builder.query({
      query: (id) => ({
        url: `/tv/${id}/content_ratings`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetTheDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
  useGetTheCreditsApiQuery,
  useGetTheMoviesAndTvApiQuery,
  useGetTheTVRatingsApiQuery,
  useGetTheProvidersApiQuery,
} = theMovieApi;
