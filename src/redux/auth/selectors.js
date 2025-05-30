export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.accessToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectBalance = state => state.auth.user.balance;

export const selectAuthError = state => state.auth.error;

export const selectIsAuthLoadding = state => state.auth.isAuthLoadding;
