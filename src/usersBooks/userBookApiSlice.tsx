import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../api/apiSlice';

export const BookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/api/v1/getBooks',
    }),
    providesTags: ['books'],
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: (body) => ({
        url: '/books/api/v1/addBook',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: (body) => ({
        url: `/books/api/v1/updateBook/${body?._id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/api/v1/deleteBook/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = BookApi;