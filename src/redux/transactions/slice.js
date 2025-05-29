import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  patchTransaction,
} from './operations';
import { logIn, logOut, refreshUser, register } from '../auth/operations';
// import toast from 'react-hot-toast';

const handlePending = state => {
  state.loading = true;
};

const handleReject = (state, action) => {
  state.loading = false;
  if (action.payload === 'canceled') return state;
  state.error = action.payload;
};

const handleAuthSuccess = state => {
  state.error = null;
  state.loading = false;
};

const initialState = {
  items: [],
  loading: true,
  error: null,
  page: 1,
  perPage: 20,
  totalItems: null,
  totalPages: null,
  hasPreviousPage: null,
  hasNextPage: null,
  sortBy: 'date',
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, handlePending)
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, handleReject)
      .addCase(addTransaction.pending, handlePending)

      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.data?.transaction) {
          state.items.unshift(action.payload.data.transaction);
        }
      })

      .addCase(addTransaction.rejected, handleReject)
      .addCase(patchTransaction.pending, handlePending)

      .addCase(patchTransaction.fulfilled, (state, action) => {
        console.log({ action });
        state.loading = false;
        state.items = state.items.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(patchTransaction.rejected, handleReject)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item._id !== action.payload);
      })
      .addCase(deleteTransaction.rejected, handleReject)
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleAuthSuccess)
      .addCase(register.rejected, handleReject)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleAuthSuccess)
      .addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        // if (payload === 'Request failed with status code 400') {
        //   toast.error('Wrong email or password');
        //   return state;
        // }
        state.error = payload;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => initialState)
      .addCase(logOut.rejected, handleReject)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleAuthSuccess)
      .addCase(refreshUser.rejected, (state, { payload }) => {
        if (payload === "User isn't logged in") return initialState;
        handleReject(state, { payload });
      });
  },
});

export const transactionsReducer = slice.reducer;
