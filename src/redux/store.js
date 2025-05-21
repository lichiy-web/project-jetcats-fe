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
import { categoriesReducer } from './categories/slice';
import { transactionsReducer } from './transactions/slice';
import { modalsReducer } from './modals/slice';

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

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    categories: categoriesReducer,
    transactions: transactionsReducer,
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
