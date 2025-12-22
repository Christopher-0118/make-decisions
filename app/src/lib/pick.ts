import type { Rng } from "./mulberry32";

export type PickOptions = {
  unique?: boolean; // без повторов
};

export function pickMany<T>(
  items: readonly T[],
  count: number,
  rng: Rng,
  options: PickOptions = { unique: true }
): T[] {
  if (!Number.isFinite(count) || count <= 0) return [];
  if (items.length === 0) return [];

  const unique = options.unique ?? true;

  // Если unique и count <= length: делаем частичное "тасование"
  if (unique && count <= items.length) {
    const arr = items.slice(); // копия
    // Fisher-Yates до count
    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(rng() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
  }

  // Иначе — с повторами
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rng() * items.length);
    result.push(items[idx]);
  }
  return result;
}