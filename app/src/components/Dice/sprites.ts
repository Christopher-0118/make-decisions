import type { die } from '@/store/type';
import type { SpriteMeta } from '@/components/type';
import d4Sprite from '@/assets/d4.png';
import d6Sprite from '@/assets/d6.png';
import d8Sprite from '@/assets/d8.png';
import d10Sprite from '@/assets/d10.png';
import d12Sprite from '@/assets/d12.png';
import d20Sprite from '@/assets/d20.png';

export const SPRITES: Record<die, SpriteMeta> = {
  4: {
    url: d4Sprite, 
    cols: 10, 
    rows: 2, 
    frameSize: 340, 
    rollFrames: 7, 
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
  6: {
    url: d6Sprite, 
    cols: 10, 
    rows: 2, 
    frameSize: 340, 
    rollFrames: 7,
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
  8: {
    url: d8Sprite,
    cols: 10,
    rows: 2,
    frameSize: 340,
    rollFrames: 7,
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
  10: {
    url: d10Sprite, 
    cols: 10, 
    rows: 3, 
    frameSize: 340, 
    rollFrames: 7, 
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
  12: {
    url: d12Sprite, 
    cols: 10, 
    rows: 3, 
    frameSize: 340, 
    rollFrames: 7, 
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
  20: {
    url: d20Sprite, 
    cols: 10, 
    rows: 3, 
    frameSize: 340, 
    rollFrames: 7, 
    rollStartCol: 0,
    idleStartCol: 0,
    rollRow: 0,
    idleRow: 1,
  },
};
