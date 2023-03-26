import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../api/apiSlice';

export const BookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/api/v1/getBooks',
    }),
    providesTags: ['Books'],
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['books'],
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
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
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
