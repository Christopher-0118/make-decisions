// components
export type TabProps = {
  page: string;
  active: boolean;
  data: string;
};

export type Segment = { id: string; label: string };

export type WheelProps = {
  segments: Segment[];
  rotationDeg?: number;
  highlightedIds?: string[];
  size?: number;
};

export const RADIUS = 50;
export const CENTER = 50;
