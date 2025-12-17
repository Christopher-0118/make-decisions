import { createSlice } from '@reduxjs/toolkit';

type WheelState = {
  spins: number;
};

const initialState: WheelState = {
  spins: 0,
};

const wheelSlice = createSlice({
  name: 'wheel',
  initialState,
  reducers: {
    spin(state) {
      state.spins += 1;
    },
  },
});

export const { spin } = wheelSlice.actions;
export const wheelReducer = wheelSlice.reducer;
