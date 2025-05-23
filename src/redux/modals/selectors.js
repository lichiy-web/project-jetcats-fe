export const selectcModals = state => state.modals;

export const selectIsModalAddTransaction = state =>
  state.modals.isAddTransaction;
export const selectIsModalEditTransAction = state =>
  state.modals.isEditTransAction;
export const selectIsModalDeleteTransAction = state =>
  state.modals.isDeleteTransAction;
export const selectIsModalLogOut = state => state.modals.isLogOut;
