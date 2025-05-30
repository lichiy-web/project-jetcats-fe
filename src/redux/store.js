import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
// import { filtersReducer } from './filters/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { transactionsReducer } from './transactions/slice';
import { modalsReducer } from './modals/slice';
import summaryStatisticReducer from './summary/slice';
import { currencyReducer } from './currency/slice';
import { categoriesReducer } from './categories/slice';
import { appReducer } from './app/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    // 'isLoggedIn',
    'accessToken',
    'isAddTransaction',
    'isEditTransaction',
    'isDeleteTransaction',
    'isLogOut',
    'data',
    'timestamp',
  ],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    categories: categoriesReducer,
    transactions: transactionsReducer,
    currency: persistReducer(persistConfig, currencyReducer),
    modals: persistReducer(persistConfig, modalsReducer),
    summaryStatistic: summaryStatisticReducer,
    app: appReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
