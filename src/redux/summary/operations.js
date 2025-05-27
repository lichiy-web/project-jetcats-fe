import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api.js';

// thunk to get data through API
export const fetchSummary = createAsyncThunk(
  'summaryStatistic/fetchSummary',
  async (period, { rejectWithValue }) => {
    try {
      console.log({ period });
      const response = await appApi.get(
        `/transactions/summary?period=${period}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
