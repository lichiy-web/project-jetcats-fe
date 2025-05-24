export const selectModals = state => state.modals;

export const selectIsModalAddTransaction = state =>
  state.modals.isAddTransaction;
export const selectIsModalEditTransaction = state =>
  state.modals.isEditTransaction;
export const selectIsModalDeleteTransaction = state =>
  state.modals.isDeleteTransaction;
export const selectIsModalLogOut = state => state.modals.isLogOut;
