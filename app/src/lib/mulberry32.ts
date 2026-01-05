import {
  OR_A,
  OR_B,
  SHIFT_A,
  SHIFT_B,
  SHIFT_C,
  STATE_INCREMENT,
  TO_UINT32_SHIFT,
  UINT32_DENOMINATOR,
  type Rng,
} from './type';

const mulberry32 = (seed: number): Rng => {
  let state = seed >>> TO_UINT32_SHIFT;
  return function () {
    state += STATE_INCREMENT;

    let mixed = Math.imul(state ^ (state >>> SHIFT_A), OR_A | state);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> SHIFT_B), OR_B | mixed);
    return ((mixed ^ (mixed >>> SHIFT_C)) >>> TO_UINT32_SHIFT) / UINT32_DENOMINATOR;
  };
};

export default mulberry32;
