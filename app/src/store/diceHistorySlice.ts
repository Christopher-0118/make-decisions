import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { die, HistoryResults, HistoryState } from './type';
import { getDiceResultsSum } from './diceResults';

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
      prepare(results: number[], diceFaces: die) {
        return {
          payload: {
            id: Date.now(),
            time: new Date().toLocaleTimeString('en-En'),
            results,
            diceFaces,
            resultsSum: getDiceResultsSum(diceFaces, results),
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
