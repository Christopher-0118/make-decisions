import type { HistoryResults } from "@/store/type";

// components
export const RADIUS = 50;
export const CENTER = 50;
export const PEEK = 20;
export const CLOSE_RATIO = 0.3;
export const OPEN_RATIO = 0.15;
export const FLICK_VELOCITY = 800;
export const FULL_TURNS = 3;
export const FULL_FLIP = 360 * FULL_TURNS;
export const HALF_FLIP = 180;
export const SIDE = 1;

export type CoinSide = 'heads' | 'tails';

export type CoinProps = {
  side: 'heads' | 'tails';
  isFlipping: boolean;
  onFlipEnd?: () => void;
};

export type ListModel = {
  id: string;
  name: string;
  items: string[];
};

export type ListModelState = {
  collection: ListModel[];
};

export type CountSelectorProps = {
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
};

export type SettingsTabProps = {
  initialLists?: ListModel[];
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

export type WheelProps = {
  segments: Segment[];
  rotationDeg?: number;
  highlightedIds?: string[];
  size?: number;
};
