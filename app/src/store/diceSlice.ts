import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type DiceState = {
  lastRoll: number | null;
};

const initialState: DiceState = {
  lastRoll: null,
};

const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    roll(state, action: PayloadAction<number>) {
      state.lastRoll = action.payload;
    },
  },
});

export const { roll } = diceSlice.actions;
export const diceReducer = diceSlice.reducer;
