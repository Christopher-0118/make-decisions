// Store

import type { CoinSide } from '@/components/type';

export type HistoryResults = {
  id: number;
  time: string;
  results: string[] | CoinSide;
};

export type HistoryState = {
  entries: HistoryResults[];
};

export type wheelSettingsState = {
  count: number;
  activeList: string;
};
