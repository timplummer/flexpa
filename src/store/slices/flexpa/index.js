import { createSlice } from '@reduxjs/toolkit';

const initialState = { eob: {}, token: '' };

const flexpaSlice = createSlice({
  name: 'flexpa',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state = { ...state, token: action.payload };
    },
    setEoB: (state, action) => {
      state = { ...state, eob: action.payload };
    },
  },
});

export const { setEoB, setToken } = flexpaSlice.actions;

export default flexpaSlice.reducer;
