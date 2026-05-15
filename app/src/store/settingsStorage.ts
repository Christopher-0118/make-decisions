import {
  DICE_COUNT_VALUES,
  DICE_VALUES,
  type DiceSettingsState,
  type diceCount,
  type die,
  type wheelSettingsState,
} from './type';

const WHEEL_STORAGE_KEY = 'wheel_settings_v1';
const DICE_STORAGE_KEY = 'dice_settings_v1';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isWheelSettings(value: unknown): value is wheelSettingsState {
  if (!isRecord(value)) return false;
  const count = value['count'];
  const activeList = value['activeList'];

  return typeof count === 'number' && typeof activeList === 'string';
}

export function loadSettingsFromStorage(): wheelSettingsState | null {
  try {
    const raw = localStorage.getItem(WHEEL_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    return isWheelSettings(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveSettingsToStorage(settings: wheelSettingsState) {
  try {
    localStorage.setItem(WHEEL_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save wheel settings to localStorage', e);
  }
}

function isDiceSettings(value: unknown): value is DiceSettingsState {
  if (!isRecord(value)) return false;

  const dice = value['dice'];
  const count = value['count'];

  return DICE_VALUES.includes(dice as die) && DICE_COUNT_VALUES.includes(count as diceCount);
}

export function loadDiceSettingsFromStorage(): DiceSettingsState | null {
  try {
    const raw = localStorage.getItem(DICE_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    return isDiceSettings(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveDiceSettingsToStorage(settings: DiceSettingsState) {
  try {
    localStorage.setItem(DICE_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save dice settings to localStorage', e);
  }
}
