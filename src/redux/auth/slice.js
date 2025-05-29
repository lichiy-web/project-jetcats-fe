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
      .addCase(
        register.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          state.user = user;
          state.accessToken = accessToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(logIn.fulfilled, (state, { payload: { user, accessToken } }) => {
        state.user = user;
        state.accessToken = accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload: error }) => {
        console.log({ error });
        state.error = error;
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
export const { setBalance } = authSlice.actions;
