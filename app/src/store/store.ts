import { configureStore } from '@reduxjs/toolkit';
import wheelSettingsSlice from './wheelSettingsSlice';
import wheelHistorySlice from './wheelHistorySlice';
import wheelListsSlice from './wheelListsSlice';
import coinHistorySlice from './coinHistorySlice';
import diceSettingsSlice from './diceSettingsSlice';
import diceHistorySlice from './diceHistorySlice';
import { loadListsFromStorage, saveListsToStorage } from '@/components/Wheel/listStorage';
import {
  loadDiceSettingsFromStorage,
  loadSettingsFromStorage,
  saveDiceSettingsToStorage,
  saveSettingsToStorage,
} from './settingsStorage';
import { PRESET_LISTS } from '@/components/Wheel/presets';

// load persisted lists and settings from localStorage
const loadedLists = loadListsFromStorage();
const initialLists = loadedLists ?? PRESET_LISTS;
const loadedSettings = loadSettingsFromStorage();
const loadedDiceSettings = loadDiceSettingsFromStorage();
const defaultActive = loadedSettings?.activeList ?? initialLists[0]?.id ?? '';
const defaultCount = loadedSettings?.count ?? 1;

export const store = configureStore({
  reducer: {
    wheelHistory: wheelHistorySlice,
    wheelSettings: wheelSettingsSlice,
    wheelLists: wheelListsSlice,
    coinHistory: coinHistorySlice,
    diceSettings: diceSettingsSlice,
    diceHistory: diceHistorySlice,
  },
  preloadedState: {
    wheelLists: {
      collection: initialLists,
    },
    wheelSettings: {
      activeList: defaultActive,
      count: defaultCount,
    },
    diceSettings: loadedDiceSettings ?? {
      dice: 6,
      count: 3,
    },
  },
});

let prevList = store.getState().wheelLists.collection;
let prevSettings = store.getState().wheelSettings;
let prevDiceSettings = store.getState().diceSettings;

store.subscribe(() => {
  const state = store.getState();

  const nextList = state.wheelLists.collection;
  if (nextList !== prevList) {
    prevList = nextList;
    saveListsToStorage(nextList);
  }

  const nextSettings = state.wheelSettings;
  if (nextSettings !== prevSettings) {
    prevSettings = nextSettings;
    saveSettingsToStorage(nextSettings);
  }

  const nextDiceSettings = state.diceSettings;
  if (nextDiceSettings !== prevDiceSettings) {
    prevDiceSettings = nextDiceSettings;
    saveDiceSettingsToStorage(nextDiceSettings);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
