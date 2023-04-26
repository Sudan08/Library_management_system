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
      invalidatesTags: ['booking'],
    }),
  }),
});

export const { useGetBookingsQuery, useUpdateBookingsMutation } = bookingApi;
