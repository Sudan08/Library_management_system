import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../interface/index';

const initalState: IAuthState = {
  accessToken: null,
  scope: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initalState,
  reducers: {
    login(state, action) {
      state.accessToken = action.payload.accessToken;
      state.scope = action.payload.scope;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout(state) {
      state.accessToken = null;
      state.scope = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
