import { configureStore } from '@reduxjs/toolkit';
import flexpa from 'store/slices/flexpa';

const store = configureStore({
  reducer: {
    flexpa,
  },
});

export default store;
