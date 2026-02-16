import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CoinSide } from '@/components/type';
import type { HistoryResults, HistoryState } from './type';

const initialState: HistoryState = {
  entries: [],
};

const coinHistorySlice = createSlice({
  name: 'coinHistory',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action: PayloadAction<HistoryResults>) {
        state.entries.unshift(action.payload);
      },
      prepare(results: CoinSide) {
        return {
          payload: {
            id: Date.now(),
            time: new Date().toLocaleTimeString('en-En'),
            results,
          } satisfies HistoryResults,
        };
      },
    },
    clearAllEntries(state) {
      state.entries = [];
    },
  },
});

export const { addEntry, clearAllEntries } = coinHistorySlice.actions;
export default coinHistorySlice.reducer;
