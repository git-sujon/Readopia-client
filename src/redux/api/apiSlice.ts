/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IGetAllBooksQuery {
  searchTerm: string;
  searchValue: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: [
    "deleteBook",
    "addBook",
    "postReview",
    "updateBook",
    "wishlist",
    "finishedList",
  ],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ searchTerm, searchValue }: IGetAllBooksQuery) =>
        `/books?${searchTerm}=${searchValue}`,
      providesTags: ["addBook", "deleteBook", "updateBook"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["deleteBook", "updateBook"],
    }),
    getReview: builder.query({
      query: (id: string) => `/reviews/${id}`,
      providesTags: ["postReview"],
    }),
    addBookToDB: builder.mutation({
      query: ({ data }) => ({
        url: "/books/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["postReview"],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateBook"],
    }),
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: "/users/",
        method: "POST",
        body: data,
      }),
    }),
    getSingleUser: builder.query({
      query: (email: string) => `/users/${email}`,
      providesTags: ["wishlist", "finishedList"],
    }),
    addToWishlist: builder.mutation({
      query: ({ email, data }) => ({
        url: `/users/add-to-wishlist/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteFromWishlist: builder.mutation({
      query: ({ email, data }) => ({
        url: `/users/delete-from-wishlist/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    addToFinishedList: builder.mutation({
      query: ({ email, data }) => ({
        url: `/users/add-to-finishedList/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["finishedList"],
    }),
    deleteFromFinishedList: builder.mutation({
      query: ({ email, data }) => ({
        url: `/users/delete-from-finishedList/${email}`,
        method: "PATCH",
        body:data
      }),
      invalidatesTags: ["finishedList"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useGetReviewQuery,
  useAddBookToDBMutation,
  useAddReviewMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useCreateUserMutation,
  useGetSingleUserQuery,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
  useAddToFinishedListMutation,
  useDeleteFromFinishedListMutation,
} = api;
