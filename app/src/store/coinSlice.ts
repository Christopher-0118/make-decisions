import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CoinSide = 'heads' | 'tails';

type CoinState = {
  lastFlip: CoinSide | null;
};

const initialState: CoinState = {
  lastFlip: null,
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    flip(state, action: PayloadAction<CoinSide>) {
      state.lastFlip = action.payload;
    },
  },
});

export const { flip } = coinSlice.actions;
export const coinReducer = coinSlice.reducer;
