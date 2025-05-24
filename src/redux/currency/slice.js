import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyRates } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    data: [],
    timestamp: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencyRates.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.timestamp = action.payload.timestamp;
        state.loading = false;
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
