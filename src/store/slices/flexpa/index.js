import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt from 'jwt-decode';
import * as api from './api';

export const name = 'flexpa';

const initialState = { auth: {}, eob: {} };

export const fetchAuth = createAsyncThunk(
  `${name}/fetchAuth`,
  async (token) => {
    const data = await api.fetchAuth(token);
    const user = jwt(data?.access_token);
    const id = user.sub.replace('Patient/', '');
    return { ...data, user: { ...user, id } };
  }
);

export const fetchEob = createAsyncThunk(
  `${name}/fetchEob`,
  async (arg, { getState }) => {
    const state = getState();
    const auth = state[name].auth;
    const data = await api.fetchEob(auth);
    return data;
  }
);

const flexpaSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.auth.error = action.error;
    });
    builder.addCase(fetchEob.fulfilled, (state, action) => {
      state.eob = action.payload;
    });
    builder.addCase(fetchEob.rejected, (state, action) => {
      state.eob = action.error;
    });
  },
});

export const { setAuth, setEob } = flexpaSlice.actions;
export default flexpaSlice.reducer;
