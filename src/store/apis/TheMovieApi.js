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
    getTheMovieListApi: builder.query({
      query: () => ({
        url: `/genre/movie/list`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTheMovieListApiQuery } = theMovieApi;
