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
  isLoggedIn: null,
  isRefreshing: null,
  isLoading: null, //It needs to be renamed to isLoading
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
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          state.user = user;
          state.accessToken = accessToken;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload: { user, accessToken } }) => {
        state.user = user;
        state.accessToken = accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, { payload: error }) => {
        console.log({ error });
        state.error = error;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload: user }) => {
        state.user = user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      .addCase(refreshAccessToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        refreshAccessToken.fulfilled,
        (state, { payload: { accessToken } }) => {
          console.log(
            'In refreshAccessToken.fulfilled => accessToken:  ',
            accessToken
          );
          state.accessToken = accessToken;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(refreshAccessToken.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setBalance } = authSlice.actions;
