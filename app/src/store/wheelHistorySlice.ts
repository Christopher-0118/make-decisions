import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type HistoryResults, type HistoryState } from './type';

const initialState: HistoryState = {
  entries: [],
};

const wheelHistorySlice = createSlice({
  name: 'wheelHistory',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action: PayloadAction<HistoryResults>) {
        state.entries.unshift(action.payload);
      },
      prepare(results: string[]) {
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

export const { addEntry, clearAllEntries } = wheelHistorySlice.actions;
export default wheelHistorySlice.reducer;
