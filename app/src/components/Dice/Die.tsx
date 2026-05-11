import { useEffect, useMemo, useState } from 'react';
import { SPRITES } from './sprites';
import { DEFAULT_DELAY, DEFAULT_SIZE_PX, DELAYS, type DieProps } from '../type';
import { DICE_CONFIG } from '@/store/type';

const BACKGROUND_SCALE = 1.12;

const Die = ({ faces, value, isRolling, onRollEnd, sizePx = DEFAULT_SIZE_PX }: DieProps) => {
  const meta = SPRITES[faces];
  const config = DICE_CONFIG[faces];
  const safeValue = Math.min(Math.max(value, config.minValue), config.maxValue);
  const frameIndex = safeValue - config.minValue;
  const [rollFrame, setRollFrame] = useState(0);

  const bgPos = useMemo(() => {
    const col = isRolling
      ? (meta.rollStartCol ?? 0) + rollFrame
      : (meta.idleStartCol ?? 0) + frameIndex;
    const row = isRolling ? (meta.rollRow ?? 1) : (meta.idleRow ?? 0);

    const x = meta.cols === 1 ? 0 : (col / (meta.cols - 1)) * 100;
    const y = meta.rows === 1 ? 0 : (row / (meta.rows - 1)) * 100;

    return { x, y };
  }, [
    isRolling,
    meta.cols,
    meta.idleRow,
    meta.idleStartCol,
    meta.rollRow,
    meta.rollStartCol,
    meta.rows,
    frameIndex,
    rollFrame,
  ]);

  useEffect(() => {
    if (!isRolling) return;

    let cancelled = false;
    let timeoutId: number | null = null;
    const run = (frameIndex: number) => {
      if (cancelled) return;

      setRollFrame(frameIndex);

      if (frameIndex >= meta.rollFrames - 1) {
        onRollEnd?.();
        return;
      }

      timeoutId = window.setTimeout(() => {
        run(frameIndex + 1);
      }, DELAYS[frameIndex] ?? DEFAULT_DELAY);
    };

    run(0);

    return () => {
      cancelled = true;
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [isRolling, meta.rollFrames, onRollEnd]);

  return (
    <div
      className="die"
      style={{
        width: sizePx,
        height: sizePx,
        backgroundImage: `url(${meta.url})`,
        backgroundSize: `${meta.cols * 100 * BACKGROUND_SCALE}% ${meta.rows * 100 * BACKGROUND_SCALE}%`,
        backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
      }}
      aria-label={`d${faces} result ${safeValue}`}
    />
  );
};

export default Die;
