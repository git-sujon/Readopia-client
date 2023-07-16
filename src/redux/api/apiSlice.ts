import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ['addBook'],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ['addBook'],
    }),
    getSingleBook: builder.query({
      query: (id:string) => `/books/${id}`,
    }),
    getReview: builder.query({
      query: (id:string) => `/reviews/${id}`,
    }),
    addBookToDB:builder.mutation({
      query:({data})=>({
        url:"/books/create-book",
        method:"POST",
        body: data
      }),
      invalidatesTags: ['addBook'],
    }),
    addReview:builder.mutation({
      query:({id, data})=>({
        url:"/reviews/",
        method:"PATCH",
        body: data
      }),
      // invalidatesTags: ['addBook'],
    }),
    deleteBook: builder.mutation({
        query: ({id}) => ({
            url:`/books/${id}`,
            method:"DELETE",
        })
    })
  }),
});


export const {useGetAllBooksQuery, useGetSingleBookQuery,useGetReviewQuery, useAddBookToDBMutation, useAddReviewMutation, useDeleteBookMutation, } = api