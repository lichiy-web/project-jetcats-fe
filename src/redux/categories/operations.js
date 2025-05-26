import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (signal, thunkAPI) => {
    return appApi
      .get('/categories', { signal: signal })
      .then(({ data }) => data.data)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);
