import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ResultsState = {
  count: number;
};

const initialState: ResultsState = {
  count: 1,
};

const ResultsSlice = createSlice({
  name: 'resultsCount',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { setCount, increment, decrement } = ResultsSlice.actions;
export default ResultsSlice.reducer;
