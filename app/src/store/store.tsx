import { configureStore } from '@reduxjs/toolkit';
import { wheelReducer } from './wheelSettingsSlice';
import wheelHistorySlice from './wheelHistorySlice';
import { diceReducer } from './diceSlice';
import { coinReducer } from './coinSlice';

export const store = configureStore({
  reducer: {
    wheelHistory: wheelHistorySlice,
    wheel: wheelReducer,
    dice: diceReducer,
    coin: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
