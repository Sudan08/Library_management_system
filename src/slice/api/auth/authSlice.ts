import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  token: null,
  scope: null,
  isAuthenticated: false,
  userName: null,
  _userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initalState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.scope = action.payload.scope;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userName = action.payload.userName;
      state._userId = action.payload._userId;
    },
    logout(state) {
      state.token = null;
      state.scope = null;
      state.isAuthenticated = false;
      state.userName = null;
      state._userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
