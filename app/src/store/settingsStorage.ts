import type { wheelSettingsState } from './type';

const STORAGE_KEY = 'wheel_settings_v1';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isWheelSettings(value: unknown): value is wheelSettingsState {
  if (!isRecord(value)) return false;
  const count = value['count'];
  const activeList = value['activeList'];

  return (
    typeof count === 'number' &&
    typeof activeList === 'string'
  );
}

export function loadSettingsFromStorage(): wheelSettingsState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    return isWheelSettings(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveSettingsToStorage(settings: wheelSettingsState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save wheel settings to localStorage', e);
  }
}
