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
