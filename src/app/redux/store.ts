import {
  type AnyAction,
  type ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit';

import { isDev } from '@/common/config';
import localApi from '@/common/services/local';

import reducer from './reducer';

export const configureAppStore = (preloadedState?: TypedObject) => {
  const store = configureStore({
    reducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localApi.middleware),
    preloadedState,
  });

  if (isDev && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(reducer));
  }

  return store;
};

const store = configureAppStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'] &
  ThunkDispatch<RootState, void, AnyAction>;

export default store;
