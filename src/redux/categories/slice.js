import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  if (action.payload === 'canceled') return state;
  state.error = action.payload;
};

const handleSuccess = (state, action) => {
  state.error = null;
  state.isLoading = false;
  state.items = action.payload;
};

const initialState = {
  items: [],
  isLoading: true,
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
