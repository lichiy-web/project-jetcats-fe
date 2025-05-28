import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';
import { setBalance } from '../auth/slice';
import { disableLoader, enableLoader } from '../app/slice';

export const enLoader = thunkAPI => thunkAPI.dispatch(enableLoader());
export const disLoader = thunkAPI => thunkAPI.dispatch(disableLoader());

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (signal, thunkAPI) => {
    enLoader(thunkAPI);
    return (
      appApi
        .get('/transactions', { signal: signal })
        // .then(({ data }) => data)
        .then(({ data }) => data.data.transactions)
        .catch(error => thunkAPI.rejectWithValue(error.message))
        .finally(() => disLoader(thunkAPI))
    );
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    enLoader(thunkAPI);
    return appApi
      .post('/transactions', transaction)
      .then(({ data }) => {
        thunkAPI.dispatch(setBalance(data.data.balance));
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
      .finally(() => disLoader(thunkAPI));
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    enLoader(thunkAPI);
    return appApi
      .delete(`/transactions/${transactionId}`)
      .then(({ data }) => {
        const {
          data: { balance },
        } = data;
        thunkAPI.dispatch(setBalance(balance));
        return transactionId;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
      .finally(() => disLoader(thunkAPI));
  }
);

export const patchTransaction = createAsyncThunk(
  'transactions/patchTransaction',
  async ({ transactionId, transaction }, thunkAPI) => {
    enLoader(thunkAPI);
    return appApi
      .patch(`/transactions/${transactionId}`, transaction)
      .then(({ data }) => {
        const {
          data: { balance },
        } = data;
        thunkAPI.dispatch(setBalance(balance));
        return { ...transaction, _id: transactionId };
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
      .finally(() => disLoader(thunkAPI));
  }
);
