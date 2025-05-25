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
// <<<<<<< HEAD
// =======
import { categoriesReducer } from './categories/slice';
// >>>>>>> 752b2f100ea9b4351420f99319a10512d9939972
import { transactionsReducer } from './transactions/slice';
import { modalsReducer } from './modals/slice';
import { currencyReducer } from './currency/slice';

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
    'isEditTransAction',
    'isDeleteTransAction',
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
    // <<<<<<< HEAD
    // =======
    categories: categoriesReducer,
    // >>>>>>> 752b2f100ea9b4351420f99319a10512d9939972
    transactions: transactionsReducer,
    currency: persistReducer(persistConfigCurrency, currencyReducer),
    modals: persistReducer(persistConfigModals, modalsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
