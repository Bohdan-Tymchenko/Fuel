import { configureStore } from '@reduxjs/toolkit';
import providerReducer from './reducers/wallet-provider-slice';

const store = configureStore({
  reducer: {
    providerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;