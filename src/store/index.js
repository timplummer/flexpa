import { configureStore } from '@reduxjs/toolkit';
import flexpaApi from 'store/slices/flexpa';

const store = configureStore({
  reducer: {
    [flexpaApi.reducerPath]: flexpaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flexpaApi.middleware),
});

export default store;
