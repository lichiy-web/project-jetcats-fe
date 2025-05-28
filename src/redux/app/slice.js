import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enableLoader: state => {
      state.isLoading = true;
    },
    disableLoader: state => {
      state.isLoading = false;
    },
  },
});

export const appReducer = slice.reducer;
export const { enableLoader, disableLoader } = slice.actions;
