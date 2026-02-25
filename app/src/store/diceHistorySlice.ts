import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { HistoryResults, HistoryState } from './type';

const initialState: HistoryState = {
  entries: [],
};

const diceHistorySlice = createSlice({
  name: 'diceHistory',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action: PayloadAction<HistoryResults>) {
        state.entries.unshift(action.payload);
      },
      prepare(results: number[]) {
        return {
          payload: {
            id: Date.now(),
            time: new Date().toLocaleTimeString('en-En'),
            results,
            resultsSum: results.reduce((accum, currVal) => accum + currVal, 0),
          } satisfies HistoryResults,
        };
      },
    },
    clearAllEntries(state) {
      state.entries = [];
    },
  },
});

export const { addEntry, clearAllEntries } = diceHistorySlice.actions;
export default diceHistorySlice.reducer;
