import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBooks: builder.query({
      query: (id:string) => `/books/${id}`,
    }),
  }),
});


export const {useGetAllBooksQuery, useGetSingleBooksQuery} = api