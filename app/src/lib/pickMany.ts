import type { PickManyArgs } from './type';

const pickMany = <T>({ items, count, rng, options = { unique: true } }: PickManyArgs<T>): T[] => {
  if (!Number.isFinite(count) || count <= 0) return [];
  if (items.length === 0) return [];

  const unique = options.unique ?? true;

  if (unique && count <= items.length) {
    const arr = items.slice();

    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(rng() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
  }

  const result: T[] = [];

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rng() * items.length);
    result.push(items[idx]);
  }

  return result;
};

export default pickMany;
