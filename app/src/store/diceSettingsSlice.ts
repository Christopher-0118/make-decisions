import { createSlice } from '@reduxjs/toolkit';

type die = 4 | 6 | 8 | 10 | 12 | 20 | 100;

type DiceSettingState = {
  dice: die;
  count: 1 | 2 | 3 | 4 | 5;
};

const initialState: DiceSettingState = {
  dice: 6,
  count: 3,
};

const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    // roll(state, action: PayloadAction<number>) {
    //   state.lastRoll = action.payload;
    // },
  },
});

//export const { roll } = diceSlice.actions;
export const diceReducer = diceSlice.reducer;
