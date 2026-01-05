import { useMemo, useState } from 'react';
import Wheel from '@/components/Wheel';
import useRandomizer from '@/hooks/useRandomizer';
import { FULL_CIRCLE, SEED, SPINS_COUNT } from './types';

/**
 *
 * Добавить подтягивание списка из store
 * Вынести стили в wheelroute.css
 */

const WheelRoute = () => {
  const count: number = 1; // from settings || default
  const segments: { id: string; label: string }[] = [
    // from settings || default
    { id: 'banana', label: 'banana' },
    { id: 'dragon fruit', label: 'dragon fruit' },
    { id: 'apple', label: 'apple' },
    { id: 'strawberry', label: 'strawberry' },
  ];
  const [rotation, setRotation] = useState(0);
  const { result, generate } = useRandomizer({ seed: SEED, values: segments, unique: true });
  const spin = (count: number) => {
    setRotation((prev) => prev + FULL_CIRCLE * SPINS_COUNT + Math.random() * FULL_CIRCLE);
    generate(count);
  };
  const highlightedIds = useMemo(() => result.map((item) => item.id), [result]);

  return (
    <div style={{ padding: 16, display: 'grid', gap: 12 }}>
      <Wheel segments={segments} rotationDeg={rotation} highlightedIds={highlightedIds} />
      <button onClick={() => spin(count)}>Spin</button>
      <div>Picked: {result.map((item) => item.id).join(', ') || '—'}</div>
    </div>
  );
};

export default WheelRoute;
