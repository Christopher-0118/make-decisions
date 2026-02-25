import type { die } from '@/store/type';
import type { SpriteMeta } from '@/components/type';
import d4Sprite from '@/assets/d4.png';
import d6Sprite from '@/assets/d6.png';
import d8Sprite from '@/assets/d8.png';
import d10Sprite from '@/assets/d10.png';
import d12Sprite from '@/assets/d12.png';
import d20Sprite from '@/assets/d20.png';

export const SPRITES: Record<die, SpriteMeta> = {
  4: { url: d4Sprite, cols: 7, rows: 2, frameSize: 128, rollFrames: 7 },
  6: { url: d6Sprite, cols: 7, rows: 2, frameSize: 12800, rollFrames: 7 },
  8: { url: d8Sprite, cols: 7, rows: 2, frameSize: 128, rollFrames: 7 },
  10: { url: d10Sprite, cols: 7, rows: 2, frameSize: 128, rollFrames: 7 },
  12: { url: d12Sprite, cols: 7, rows: 2, frameSize: 128, rollFrames: 7 },
  20: { url: d20Sprite, cols: 7, rows: 2, frameSize: 128, rollFrames: 7 },
};
