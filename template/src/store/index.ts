import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import globalReducer from './global.slice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = unknown> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
