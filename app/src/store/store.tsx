import { configureStore } from '@reduxjs/toolkit';
import wheelSettingsSlice from './wheelSettingsSlice';
import wheelHistorySlice from './wheelHistorySlice';
import { diceReducer } from './diceSlice';
import { coinReducer } from './coinSlice';
import wheelListsSlice from './wheelListsSlice';
import { loadListsFromStorage, saveListsToStorage } from '@/components/Wheel/listStorgae';
import { PRESET_LISTS } from '@/components/Wheel/presets';

const loaded = loadListsFromStorage();
const initialLists = loaded ?? PRESET_LISTS;

export const store = configureStore({
  reducer: {
    wheelHistory: wheelHistorySlice,
    wheelSettings: wheelSettingsSlice,
    wheelLists: wheelListsSlice,
    dice: diceReducer,
    coin: coinReducer,
  },
  preloadedState: {
    wheelLists: {
      collection: initialLists,
    },
  },
});

let prevList = store.getState().wheelLists.collection;
store.subscribe(() => {
  const nextList = store.getState().wheelLists.collection;

  if (nextList !== prevList) {
    prevList = nextList;
    saveListsToStorage(nextList);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
