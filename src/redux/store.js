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
<<<<<<< HEAD
import { currencyReducer } from './currencyItem/currencySlice';
import summaryStatisticReducer from './summary/summaryStatisticSlice';
=======
import { currencyReducer } from './currency/slice';
import { categoriesReducer } from './categories/slice';
>>>>>>> 4075de2df98eea249571a7b44eef2a0d6001e296

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['accessToken'],
};

const persistConfigModals = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    'isAddTransaction',
    'isEditTransaction',
    'isDeleteTransaction',
    'isLogOut',
  ],
};

const persistConfigCurrency = {
  key: 'currency',
  version: 1,
  storage,
  whitelist: ['data', 'timestamp'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    categories: categoriesReducer,
    transactions: transactionsReducer,
    currency: persistReducer(persistConfigCurrency, currencyReducer),
    modals: persistReducer(persistConfigModals, modalsReducer),
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
