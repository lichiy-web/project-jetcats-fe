export const selectIsLoading = state => state.app.isLoading;

export const selectIsGlobalLoading = state =>
  state.app.isLoading ||
  state.auth.isLoading ||
  state.categories.isLoading ||
  state.currency.isLoading ||
  state.transactions.isLoading;
