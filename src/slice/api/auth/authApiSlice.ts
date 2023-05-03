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
    addTeacher: builder.mutation({
      query: (body) => ({
        url: '/users/api/v1/addTeacher',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useAddTeacherMutation } = authApi;
