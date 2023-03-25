import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: (body) => ({
        url: '/books',
        method: 'POST',
        body,
      }),
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
