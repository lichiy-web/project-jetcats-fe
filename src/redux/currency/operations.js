import { createAsyncThunk } from '@reduxjs/toolkit';
import { currencyApi } from '../api/api';

const CACHE_TTL = 60 * 60 * 1000;

export const fetchCurrencyRates = createAsyncThunk(
  'currency/fetchRates',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const cached = state.currency;
    const now = Date.now();

    if (cached.timestamp && now - cached.timestamp < CACHE_TTL) {
      return { data: cached.data, timestamp: cached.timestamp };
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

      return { data: formatted, timestamp: now };
    } catch {
      return rejectWithValue('Error loading exchange rate');
    }
  }
);
