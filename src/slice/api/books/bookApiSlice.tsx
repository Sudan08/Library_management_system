import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../apiSlice';

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
    patchBook: builder.mutation({
      query: (body) => ({
        url: `http://localhost:8000/books/api/v1/updateBooking`,
        method: 'PATCH',
        body,
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
  usePatchBookMutation,
} = BookApi;
