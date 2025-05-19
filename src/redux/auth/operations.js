import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';

const setAuthHeader = token => {
  appApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  appApi.defaults.headers.common.Authorization = '';
};

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) =>
//     appApi
//       .post('/auth/register', credentials)
//       .then(({ data }) => {
//         // setAuthHeader(data.token);
//         return { user: data };
//       })
//       .catch(error => thunkAPI.rejectWithValue(error.message))
//       .then(user => {
//         const { email, password } = credentials;
//         return appApi.post('/auth/login', { email, password });
//       })
// );

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data: user } = await appApi.post('/auth/register', credentials);
      const { email, password } = credentials;
      const {
        data: { accessToken },
      } = appApi.post('/auth/login', { email, password });
      setAuthHeader(accessToken);
      return { user, accessToken };
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) =>
    appApi
      .post('/auth/login', credentials)
      .then(({ data }) => {
        setAuthHeader(data.accessToken);
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) =>
  appApi
    .post('/auth/logout')
    .then(() => clearAuthHeader())
    .catch(error => thunkAPI.rejectWithValue(error.message))
);

export const refreshUser = createAsyncThunk('auth/refresh', (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const storedAccessToken = state.auth.accessToken;

  if (!storedAccessToken)
    return thunkAPI.rejectWithValue("User isn't logged in");

  setAuthHeader(storedAccessToken);
  return appApi
    .get('/users/current')
    .then(({ data }) => data)
    .catch(error => thunkAPI.rejectWithValue(error.message));
});

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, thunkAPI) =>
    appApi
      .post('/auth/refresh')
      .then(({ data }) => {
        setAuthHeader(data.accessToken);
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
);
