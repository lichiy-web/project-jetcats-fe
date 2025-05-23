import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleReject = (state, action) => {
  state.loading = false;
  if (action.payload === 'canceled') return state;
  state.error = action.payload;
};

const handleSuccess = (state, action) => {
  state.error = null;
  state.loading = false;
  state.items = action.payload.data;
};

const initialState = {
  items: [],
  loading: true,
  error: null,
};

const slice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, handleSuccess)
      .addCase(fetchCategories.rejected, handleReject);
  },
});

export const categoriesReducer = slice.reducer;
