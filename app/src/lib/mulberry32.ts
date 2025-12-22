export type Rng = () => number;

/**
 * Mulberry32: simple seedable PRNG.
 * returns float in range [0, 1).
 */
export function mulberry32(seed: number): Rng {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}