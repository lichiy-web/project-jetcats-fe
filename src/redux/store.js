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
import summaryStatisticReducer from './summary/summaryStatisticSlice';
import { currencyReducer } from './currency/slice';
import { categoriesReducer } from './categories/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    'accessToken',
    'isAddTransaction',
    'isEditTransaction',
    'isDeleteTransaction',
    'isLogOut',
    'data',
    'timestamp',
  ],
};

// const persistConfigModals = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: [
//     'isAddTransaction',
//     'isEditTransaction',
//     'isDeleteTransaction',
//     'isLogOut',
//   ],
// };

// const persistConfigCurrency = {
//   key: 'currency',
//   version: 1,
//   storage,
//   whitelist: ['data', 'timestamp'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    categories: categoriesReducer,
    transactions: transactionsReducer,
    currency: persistReducer(persistConfig, currencyReducer),
    modals: persistReducer(persistConfig, modalsReducer),
    summaryStatistic: summaryStatisticReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
