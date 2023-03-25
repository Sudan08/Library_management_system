import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'http://localhost:8000';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL + '/users/api/v1',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
