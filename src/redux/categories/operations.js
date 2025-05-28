import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';
import { disLoader, enLoader } from '../transactions/operations';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (signal, thunkAPI) => {
    enLoader(thunkAPI);
    return appApi
      .get('/categories', { signal: signal })
      .then(({ data }) => data.data)
      .catch(error => thunkAPI.rejectWithValue(error.message))
      .finally(() => disLoader(thunkAPI));
  }
);
