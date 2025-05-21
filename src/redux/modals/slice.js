import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const initialState = {
  isAddTransaction: false,
  isEditTransAction: false,
  isDeleteTransAction: false,
  isLogOut: false,
};

export const MODALS = {
  add: 'AddTransaction',
  edit: 'EditTransAction',
  delete: 'DeleteTransAction',
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
