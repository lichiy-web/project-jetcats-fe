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
        .finally(() => {
          disLoader(thunkAPI);
        })
    );
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
      .then(({ data }) => {
        const {
          data: { balance },
        } = data;
        console.log('deleteTransaction => ', { balance });
        thunkAPI.dispatch(setBalance(balance));
        return transactionId;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const patchTransaction = createAsyncThunk(
  'transactions/patchTransaction',
  async ({ transactionId, transaction }, thunkAPI) => {
    return appApi
      .patch(`/transactions/${transactionId}`, transaction)
      .then(({ data }) => {
        const {
          data: { balance },
        } = data;
        // console.log('patchTransaction => ', { balance });
        thunkAPI.dispatch(setBalance(balance));
        return { ...transaction, _id: transactionId };
      })
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);
