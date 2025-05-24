import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { currencyApi } from '../api/api';

const CURRENCY_CACHE_KEY = 'monobank_currency_data';
const CACHE_TTL = 60 * 60 * 1000;

export const fetchCurrencyRates = createAsyncThunk(
  'currency/fetchRates',
  async (_, thunkAPI) => {
    const cached = JSON.parse(localStorage.getItem(CURRENCY_CACHE_KEY));
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }

    try {
      const response = await currencyApi.get('/bank/currency');
      const filtered = response.data.filter(
        ({ currencyCodeA, currencyCodeB }) =>
          (currencyCodeA === 840 || currencyCodeA === 978) &&
          currencyCodeB === 980
      );

      const formatted = filtered.map(item => ({
        currency:
          item.currencyCodeA === 840
            ? 'USD'
            : item.currencyCodeA === 978
            ? 'EUR'
            : '',
        purchase: item.rateBuy?.toFixed(2) || item.rateCross?.toFixed(2),
        sale: item.rateSell?.toFixed(2) || item.rateCross?.toFixed(2),
      }));

      localStorage.setItem(
        CURRENCY_CACHE_KEY,
        JSON.stringify({ data: formatted, timestamp: now })
      );

      return formatted;
    } catch {
      return thunkAPI.rejectWithValue('Error loading exchange rate');
    }
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    data: [],
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
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
