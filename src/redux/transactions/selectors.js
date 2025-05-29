// import { createSelector } from '@reduxjs/toolkit';
// import { selectNameFilter } from '../filters/selectors';

export const selectTransactions = state => state.transactions.items;
export const selectLoading = state => state.transaction.loading;
export const selectError = state => state.transactions.error;
export const selectPage = state => state.transactions.paginationData.page;
export const selectPerPage = state => state.transactions.paginationData.perPage;
export const selectPaginationData = state => state.transactions.paginationData;
// export const selectFilteredContacts = createSelector(
//   [selectTransactions, selectNameFilter],
//   (contactList, searchQuery) =>
//     contactList.filter(({ name }) =>
//       name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
//     )
// );
