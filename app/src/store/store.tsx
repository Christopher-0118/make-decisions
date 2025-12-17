import { configureStore } from '@reduxjs/toolkit';
import { wheelReducer } from './wheelSlice';
import { diceReducer } from './diceSlice';
import { coinReducer } from './coinSlice';

export const store = configureStore({
  reducer: {
    wheel: wheelReducer,
    dice: diceReducer,
    coin: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
