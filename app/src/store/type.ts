// Store

import type { CoinSide } from '@/components/type';

export type HistoryResults = {
  id: number;
  time: string;
  results: string[] | CoinSide | number[];
  resultsSum?: number;
};

export type HistoryState = {
  entries: HistoryResults[];
};

export type wheelSettingsState = {
  count: number;
  activeList: string;
};

export type die = 4 | 6 | 8 | 10 | 12 | 20;
export type diceCount = 1 | 2 | 3 | 4 | 5;

export const DICE_VALUES: die[] = [4, 6, 8, 10, 12, 20];
export const DICE_COUNT_VALUES: diceCount[] = [1, 2, 3, 4, 5];

export type DiceSettingsState = {
  dice: die;
  count: diceCount;
};
