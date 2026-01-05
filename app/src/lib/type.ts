// lib
export const STATE_INCREMENT = 0x6d2b79f5;
export const TO_UINT32_SHIFT = 0;
export const SHIFT_A = 15;
export const SHIFT_B = 7;
export const SHIFT_C = 14;
export const OR_A = 1;
export const OR_B = 61;
export const UINT32_DENOMINATOR = 2 ** 32; //4294967296

export type Rng = () => number;
export type PickOptions = {
  unique?: boolean;
};

export type PickManyArgs<T> = {
  items: readonly T[];
  count: number;
  rng: Rng;
  options?: PickOptions;
};
