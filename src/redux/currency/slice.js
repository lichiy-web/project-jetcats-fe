import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyRates } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    data: [],
    timestamp: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencyRates.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.timestamp = action.payload.timestamp;
        state.isLoading = false;
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
