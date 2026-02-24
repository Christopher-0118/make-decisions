import { useEffect, useMemo, useState } from 'react';
import { SPRITES } from './sprites';
import './die.css';
import { DEFAULT_DELAY, DEFAULT_SIZE_PX, DELAYS, type DieProps } from '../type';

const Die = ({ faces, value, isRolling, onRollEnd, sizePx = DEFAULT_SIZE_PX }: DieProps) => {
  const meta = SPRITES[faces];
  const safeValue = Math.min(Math.max(value, 1), faces);
  const [rollFrame, setRollFrame] = useState(0);

  const bgPos = useMemo(() => {
    const col = isRolling ? rollFrame : safeValue - 1;

    const x = meta.cols === 1 ? 0 : (col / (meta.cols - 1)) * 100;
    const y = isRolling ? 100 : 0;

    return { x, y };
  }, [isRolling, meta.cols, rollFrame, safeValue]);

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
        backgroundSize: `${meta.cols * 100}% ${meta.rows * 100}%`,
        backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
      }}
      aria-label={`d${faces} result ${safeValue}`}
    />
  );
};

export default Die;
