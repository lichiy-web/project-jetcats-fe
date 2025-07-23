import { createAsyncThunk } from '@reduxjs/toolkit';

export function createRetryableAsyncThunk(type, payloadCreator) {
  const thunk = createAsyncThunk(type, payloadCreator, {
    getPendingMeta: meta => ({
      ...meta,
      baseThunk: () => thunk, // посилання на thunk через замикання
    }),
  });

  return thunk;
}
