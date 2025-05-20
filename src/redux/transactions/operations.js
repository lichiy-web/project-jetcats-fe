import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (signal, thunkAPI) => {
    return appApi
      .get('/transactions', { signal: signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    return appApi
      .post('/transactions', transaction)
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    return appApi
      .delete(`/transactions/${transactionId}`)
      .then(({ data }) => data._id)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const patchTransaction = createAsyncThunk(
  'transactions/patchTransaction',
  async ({ transactionId, transaction }, thunkAPI) => {
    return appApi
      .patch(`/transactions/${transactionId}`, transaction)
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);
