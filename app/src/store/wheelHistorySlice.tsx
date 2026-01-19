import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type WheelHistoryResult, type WheelHistoryState } from './type';

const initialState: WheelHistoryState = {
  entries: [],
};

const wheelHistorySlice = createSlice({
  name: 'wheelHistory',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action: PayloadAction<WheelHistoryResult>) {
        state.entries.unshift(action.payload);
      },
      prepare(results: string[]) {
        return {
          payload: {
            id: Date.now(),
            time: new Date().toLocaleTimeString('en-En'),
            results,
          } satisfies WheelHistoryResult,
        };
      },
    },
    deleteAllEntries(state) {
      state.entries = [];
    },
  },
});

export const { addEntry, deleteAllEntries } = wheelHistorySlice.actions;
export default wheelHistorySlice.reducer;
