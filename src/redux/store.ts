import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from '../Api/mainApi';
import duchnilaReducer from './dushnilaSlice';

export const store = configureStore({
  reducer: {
    duchnila: duchnilaReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
