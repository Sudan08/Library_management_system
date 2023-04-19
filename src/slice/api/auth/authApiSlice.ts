import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/users/api/v1/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
