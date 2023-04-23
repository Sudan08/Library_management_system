import { apiSlice } from '../apiSlice';

export const BookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyBooks: builder.query({
      query: (id) => ({
        url: `/mybooks/api/v1/getBooks/${id}`,
        method: 'GET',
      }),
      providesTags: ['myBooks'],
    }),
    postMyBooks: builder.mutation({
      query: (body) => ({
        url: '/mybooks/api/v1/addBook',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['myBooks'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/mybooks/api/v1/deleteBook/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['myBooks'],
    }),
  }),
});

export const {
  useGetMyBooksQuery,
  usePostMyBooksMutation,
  useDeleteBookMutation,
} = BookApi;
