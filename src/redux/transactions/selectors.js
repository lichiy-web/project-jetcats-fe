export const selectTransactions = state => state.transactions.items;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectError = state => state.transactions.error;
export const selectPage = state => state.transactions.paginationData.page;
export const selectPerPage = state => state.transactions.paginationData.perPage;
export const selectPaginationData = state => state.transactions.paginationData;
