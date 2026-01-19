// WheelHistory
export type WheelHistoryResult = {
  id: number;
  time: string;
  results: string[];
};

export type WheelHistoryState = {
  entries: WheelHistoryResult[];
};

//
