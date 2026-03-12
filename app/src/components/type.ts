import type { die, HistoryResults } from '@/store/type';

// components
export const RADIUS = 50;
export const CENTER = 50;
export const PEEK = 10;
export const CLOSE_RATIO = 0.3;
export const OPEN_RATIO = 0.15;
export const FLICK_VELOCITY = 800;
export const FULL_TURNS = 3;
export const FULL_FLIP = 360 * FULL_TURNS;
export const HALF_FLIP = 180;
export const SIDE = 1;
export const SIDES = [4, 6, 8, 10, 12, 20] as const;
export const COUNTS = [1, 2, 3, 4, 5] as const;
export const DELAYS = [40, 60, 90, 130, 190, 270, 380];
export const DEFAULT_DELAY = 80;
export const DEFAULT_SIZE_PX = 85;
export const SHEET_SPRING_STIFFNESS = 420;
export const SHEET_SPRING_DAMPING = 38;

export type UP = -1;
export type DOWN = 1;
export type UNSETTLED = 0;

//Coin

export type CoinSide = 'heads' | 'tails';

export type CoinProps = {
  side: 'heads' | 'tails';
  isFlipping: boolean;
  onFlipEnd?: () => void;
};

export type CountSelectorProps = {
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
};

export type HistoryProps = {
  entries: HistoryResults[];
  onClear: () => void;
};

export type TabProps = {
  id: string;
  label: string;
  isActive: boolean;
  onSelect: (id: string) => void;
};

export type TabsProps = {
  settingsContent?: React.ReactNode;
  historyContent: React.ReactNode;
  defaultTab?: 'settings' | 'history';
  swipeEnabled?: boolean;
  swipeThresholdPx?: number;
};

export type WheelProps = {
  segments: Segment[];
  rotationDeg?: number;
  highlightedIds?: string[];
  size?: number;
};

export type ListModel = {
  id: string;
  name: string;
  items: string[];
};

export type ListModelState = {
  collection: ListModel[];
};

export type ListsEditorProps = {
  lists: ListModel[];
  activeListId: string;
  expandedListId: string | null;
  onSelectActive: (id: string) => void;
  onToggleExpanded: (id: string) => void;
  onChangeListName: (id: string, name: string) => void;
  onChangeItem: (listId: string, index: number, value: string) => void;
  onBlurItem: (listId: string, index: number) => void;
  onAddItem: (listId: string, value: string) => void;
  onAddList: () => void;
  onDeleteList: (listId: string) => void;
};

export type Segment = { id: string; label: string };

export type DiscreteSliderProps<T extends number> = {
  label: string;
  values: readonly T[];
  value: T;
  onChange: (next: T) => void;
};

// Dice

export type DiceGroupProps = {
  count: number;
  faces: die;
  values: number[];
  isRolling: boolean;
  onRollEnd?: () => void;
};

export type DieProps = {
  faces: die;
  value: number;
  isRolling: boolean;
  onRollEnd?: () => void;
  sizePx?: number;
};

export type SpriteMeta = {
  url: string;
  cols: number;
  rows: number;
  frameSize: number;
  rollFrames: number;
};
