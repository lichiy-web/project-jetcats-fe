import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/api';
import { disLoader, enLoader } from '../transactions/operations';

const setAuthHeader = token => {
  appApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  appApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    enLoader(thunkAPI);
    try {
      const {
        data: { data: user },
      } = await appApi.post('/auth/register', credentials);
      const { email, password } = credentials;
      const {
        data: {
          data: { accessToken },
        },
      } = await appApi.post('/auth/login', { email, password });
      setAuthHeader(accessToken);
      return { user, accessToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      disLoader(thunkAPI);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    enLoader(thunkAPI);
    try {
      const {
        data: { data: loginRes },
      } = await appApi.post('/auth/login', credentials);
      const { accessToken } = loginRes;
      // console.log({ accessToken });
      setAuthHeader(accessToken);
      const {
        data: { data: user },
      } = await appApi.get('/users/current');
      return { user, accessToken };
    } catch (error) {
      console.dir(error);
      console.log('status = ', error.status);
      if (error?.status === 401) {
        return thunkAPI.rejectWithValue('login:wrong-credentials');
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    } finally {
      disLoader(thunkAPI);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  enLoader(thunkAPI);
  appApi
    .post('/auth/logout')
    .then(() => clearAuthHeader())
    .catch(error => thunkAPI.rejectWithValue(error.message))
    .finally(() => disLoader(thunkAPI));
});

export const refreshUser = createAsyncThunk('auth/refresh', (_, thunkAPI) => {
  enLoader(thunkAPI);
  const state = thunkAPI.getState();
  const storedAccessToken = state.auth.accessToken;

  if (!storedAccessToken) {
    disLoader(thunkAPI);
    return thunkAPI.rejectWithValue("User isn't logged in");
  }

  setAuthHeader(storedAccessToken);
  return appApi
    .get('/users/current')
    .then(({ data: { data } }) => {
      return data;
    })
    .catch(error => {
      if (error.status === 401) {
        thunkAPI.dispatch(refreshAccessToken());
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    })
    .finally(() => disLoader(thunkAPI));
});

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, thunkAPI) => {
    enLoader(thunkAPI);
    appApi
      .post('/auth/refresh')
      .then(({ data: { data } }) => {
        setAuthHeader(data.accessToken);
        return data;
      })
      .catch(error => thunkAPI.rejectWithValue(error.message))
      .finally(() => disLoader(thunkAPI));
  }
);
