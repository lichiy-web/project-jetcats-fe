import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  refreshAccessToken,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        register.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          state.user = user;
          state.accessToken = accessToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(logIn.fulfilled, (state, { payload: accessToken }) => {
        // state.user = user;
        state.accessToken = accessToken;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload: user }) => {
        state.user = user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(
        refreshAccessToken.fulfilled,
        (state, { payload: accessToken }) => {
          state.accessToken = accessToken;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
