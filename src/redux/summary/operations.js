import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api.js';
import { disLoader, enLoader } from '../transactions/operations.js';

// thunk to get data through API
export const fetchSummary = createAsyncThunk(
  'summaryStatistic/fetchSummary',
  async (period, thunkAPI) => {
    enLoader(thunkAPI);
    try {
      console.log({ period });
      const response = await appApi.get(
        `/transactions/summary?period=${period}`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    } finally {
      disLoader(thunkAPI);
    }
  }
);
