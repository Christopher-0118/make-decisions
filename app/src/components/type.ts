// components
export const RADIUS = 50;
export const CENTER = 50;
export const PEEK = 20;
export const CLOSE_RATIO = 0.3;
export const OPEN_RATIO = 0.15;
export const FLICK_VELOCITY = 800;

export type TabProps = {
  id: string;
  label: string;
  isActive: boolean;
  onSelect: (id: string) => void;
};

export type TabsProps = {
  settingsContent: React.ReactNode;
  historyContent: React.ReactNode;
  defaultTab?: 'settings' | 'history';
  swipeEnabled?: boolean;
  swipeThresholdPx?: number;
};

export type Segment = { id: string; label: string };

export type WheelProps = {
  segments: Segment[];
  rotationDeg?: number;
  highlightedIds?: string[];
  size?: number;
};
