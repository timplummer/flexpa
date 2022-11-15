import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import flexpa from 'store/slices/flexpa';

export const store = configureStore({
  reducer: { flexpa },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
