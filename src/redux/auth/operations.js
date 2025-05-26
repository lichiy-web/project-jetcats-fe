import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';

const setAuthHeader = token => {
  appApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  appApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { data: user },
      } = await appApi.post('/auth/register', credentials);
      console.log({ user });
      const { email, password } = credentials;
      const {
        data: {
          data: { accessToken },
        },
      } = await appApi.post('/auth/login', { email, password });
      console.log({ accessToken });
      setAuthHeader(accessToken);
      return { user, accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { data: loginRes },
      } = await appApi.post('/auth/login', credentials);
      const { accessToken } = loginRes;
      console.log({ accessToken });
      setAuthHeader(accessToken);
      const {
        data: { data: user },
      } = await appApi.get('/users/current');
      return { user, accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) =>
  appApi
    .post('/auth/logout')
    .then(() => clearAuthHeader())
    .catch(error => thunkAPI.rejectWithValue(error.message))
);

export const refreshUser = createAsyncThunk('auth/refresh', (_, thunkAPI) => {
  // console.log('Entered refreshUser!');
  const state = thunkAPI.getState();
  const storedAccessToken = state.auth.accessToken;
  // console.log('refreshUser: ', { storedAccessToken });

  if (!storedAccessToken)
    return thunkAPI.rejectWithValue("User isn't logged in");

  setAuthHeader(storedAccessToken);
  return appApi
    .get('/users/current')
    .then(({ data: { data } }) => {
      // console.log('refreshUser: ', { user: data });
      return data;
    })
    .catch(error => thunkAPI.rejectWithValue(error.message));
});

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, thunkAPI) =>
    appApi
      .post('/auth/refresh')
      .then(({ data: { data } }) => {
        setAuthHeader(data.accessToken);
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
);
