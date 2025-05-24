import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const initialState = {
  isAddTransaction: false,
  isEditTransaction: false,
  isDeleteTransaction: false,
  isLogOut: false,
};

export const MODALS = {
  add: 'AddTransaction',
  edit: 'EditTransaction',
  delete: 'DeleteTransaction',
  logout: 'LogOut',
};

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModal: (state, { payload: modalName }) => {
      state[`is${modalName}`] = !state[`is${modalName}`];
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, () => initialState);
  },
});

export const modalsReducer = slice.reducer;
export const { toggleModal } = slice.actions;
