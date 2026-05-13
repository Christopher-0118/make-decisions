import type { die } from '@/store/type';

export const getDiceResultsSum = (diceFaces: die, results: number[]) => {
  if (diceFaces === 10 && results.length === 2) {
    const [tens, ones] = results;
    const total = tens * 10 + ones;

    return total === 0 ? 100 : total;
  }

  return results.reduce((accum, currVal) => accum + currVal, 0);
};
