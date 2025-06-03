import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

// const authTransform = createTransform(
//   inboundState => {
//     console.log('authTransform inboundState:', inboundState);
//     if (!inboundState || typeof inboundState !== 'object') return {};
//     return {
//       accessToken: inboundState?.accessToken,
//     };
//   },
//   outboundState => {
//     console.log('authTransform outboundState:', outboundState);
//     return outboundState;
//   },
//   { whitelist: ['auth'] }
// );

// const currencyTransform = createTransform(
//   inboundState => ({
//     data: inboundState.data,
//     timestamp: inboundState.timestamp,
//   }),
//   outboundState => outboundState,
//   { whitelist: ['currency'] }
// );

const authPersistConfig = {
  key: 'auth',
  storage,
  // transforms: [authTransform],
  whitelist: ['accessToken'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  // transforms: [currencyTransform],
  whitelist: ['data', 'timestamp'],
};

const modalsPersistConfig = {
  key: 'modals',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  currency: persistReducer(currencyPersistConfig, currencyReducer),
  modals: persistReducer(modalsPersistConfig, modalsReducer),
  categories: categoriesReducer,
  transactions: transactionsReducer,
  summaryStatistic: summaryStatisticReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
