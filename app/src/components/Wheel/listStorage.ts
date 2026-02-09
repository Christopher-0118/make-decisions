import type { ListModel } from '@/components/type';

const STORAGE_KEY = 'wheel_lists_v1';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((x) => typeof x === 'string');
}

function isListModel(value: unknown): value is ListModel {
  if (!isRecord(value)) return false;

  const id = value['id'];
  const name = value['name'];
  const items = value['items'];

  return typeof id === 'string' && typeof name === 'string' && isStringArray(items);
}

function isListModelArray(value: unknown): value is ListModel[] {
  return Array.isArray(value) && value.every(isListModel);
}

export function loadListsFromStorage(): ListModel[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);

    return isListModelArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveListsToStorage(lists: ListModel[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  } catch (e) {
    console.error('Failed to save lists to localStorage', e);
  }
}
