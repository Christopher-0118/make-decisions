import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DiceSettingsState, die, diceCount } from './type';

const initialState: DiceSettingsState = {
  dice: 6,
  count: 3,
};

const diceSettingsSlice = createSlice({
  name: 'diceSettings',
  initialState,
  reducers: {
    setDice: (state, action: PayloadAction<die>) => {
      state.dice = action.payload;
    },
    setCount: (state, action: PayloadAction<diceCount>) => {
      state.count = action.payload;
    },
  },
});

export const { setDice, setCount } = diceSettingsSlice.actions;
export default diceSettingsSlice.reducer;
