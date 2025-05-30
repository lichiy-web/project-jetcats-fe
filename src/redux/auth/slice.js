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
    balance: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoadding: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBalance: (state, { payload: balance }) => {
      state.user.balance = balance;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isAuthLoadding = true;
      })
      .addCase(
        register.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          state.user = user;
          state.accessToken = accessToken;
          state.isLoggedIn = true;
          state.isAuthLoadding = false;
        }
      )
      .addCase(logIn.pending, state => {
        state.isAuthLoadding = true;
      })
      .addCase(logIn.fulfilled, (state, { payload: { user, accessToken } }) => {
        state.user = user;
        state.accessToken = accessToken;
        state.isLoggedIn = true;
        state.isAuthLoadding = false;
      })
      .addCase(logIn.rejected, (state, { payload: error }) => {
        console.log({ error });
        state.error = error;
        state.isAuthLoadding = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isAuthLoadding = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload: user }) => {
        state.user = user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isAuthLoadding = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isAuthLoadding = false;
      })
      .addCase(logOut.pending, state => {
        state.isAuthLoadding = true;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, state => {
        state.isAuthLoadding = false;
      })
      .addCase(refreshAccessToken.pending, state => {
        state.isAuthLoadding = true;
      })
      .addCase(
        refreshAccessToken.fulfilled,
        (state, { payload: accessToken }) => {
          state.accessToken = accessToken;
          state.isLoggedIn = true;
          state.isAuthLoadding = false;
        }
      )
      .addCase(refreshAccessToken.rejected, state => {
        state.isAuthLoadding = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setBalance } = authSlice.actions;
