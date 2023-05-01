import { apiSlice } from '../apiSlice';

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => ({
        url: '/booking/api/v1/getbooking',
      }),
      providesTags: ['booking'],
    }),
    updateBookings: builder.mutation({
      query: (_id: string) => ({
        url: `/booking/api/v1/updatebooking/${_id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['booking', 'myBooks'],
    }),
    deleteBookings: builder.mutation({
      query: (_id: string) => ({
        url: `/booking/api/v1/deletebooking/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['booking', 'myBooks'],
    }),
    postBookings: builder.mutation({
      query: (data) => ({
        url: `/booking/api/v1/postbooking/${data.userId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['booking', 'myBooks'],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useUpdateBookingsMutation,
  useDeleteBookingsMutation,
  usePostBookingsMutation,
} = bookingApi;
