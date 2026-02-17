import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type die = 4 | 6 | 8 | 10 | 12 | 20 | 100;
type diceCount = 1 | 2 | 3 | 4 | 5;

type DiceSettingsState = {
  dice: die;
  count: diceCount;
};

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
