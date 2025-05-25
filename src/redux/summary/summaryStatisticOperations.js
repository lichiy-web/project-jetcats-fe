import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api.js';

// thunk to get data through API
export const fetchSummary = createAsyncThunk(
  'summaryStatistic/fetchSummary',
  async (_, { rejectWithValue }) => {
    try {
      const response = await appApi.get('/transactions/summary');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
