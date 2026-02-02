import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type wheelSettingsState = {
  count: number;
  activeList: string;
};

const initialState: wheelSettingsState = {
  count: 1,
  activeList: '',
};

const wheelSettingsSlice = createSlice({
  name: 'wheelSettings',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setActiveList: (state, action: PayloadAction<string>) => {
      state.activeList = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { setCount, setActiveList, increment, decrement } = wheelSettingsSlice.actions;
export default wheelSettingsSlice.reducer;
