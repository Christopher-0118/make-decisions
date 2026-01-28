import { useMemo, useState, lazy, Suspense } from 'react';
import Wheel from '@/components/Wheel/Wheel';
import useRandomizer from '@/hooks/useRandomizer';
import { FULL_CIRCLE, SEED, SPINS_COUNT } from './types';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import './WheelRoute.css';
import Settings from '@/components/Settings/Settings';
import Tabs from '@/components/Tabs/Tabs';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry } from '@/store/wheelHistorySlice';
import { useAppSelector } from '@/hooks/useAppSelector';

const WheelRoute = () => {
  const count = useAppSelector((state) => state.resultsCount.count);
  const dispatch = useAppDispatch();
  //------------------------------------------------
  const segments: { id: string; label: string }[] = [
    // from settings || default
    { id: 'banana', label: 'banana' },
    { id: 'dragon fruit', label: 'dragon fruit' },
    { id: 'apple', label: 'apple' },
    { id: 'strawberry', label: 'strawberry' },
  ];
  //------------------------------------------------
  const History = lazy(() => import('@/components/History/History'));
  const [rotation, setRotation] = useState(0);
  const { result, generate } = useRandomizer({ seed: SEED, values: segments, unique: true });
  const spin = (count: number) => {
    setRotation((prev) => prev + FULL_CIRCLE * SPINS_COUNT + Math.random() * FULL_CIRCLE);
    const generatedResults = generate(count);
    const generatedIds = generatedResults.map((item) => item.id);
    dispatch(addEntry(generatedIds));
  };
  const highlightedIds = useMemo(() => result.map((item) => item.id), [result]);

  return (
    <div className={'wheelPage'}>
      <Wheel segments={segments} rotationDeg={rotation} highlightedIds={highlightedIds} />
      <button onClick={() => spin(count)}>Spin</button>
      <div>Picked: {result.map((item) => item.id).join(', ') || '—'}</div>

      <BottomSheet>
        <Tabs
          settingsContent={<Settings />}
          historyContent={
            <Suspense fallback={<div>Loading...</div>}>
              <History />
            </Suspense>
          }
          defaultTab="settings"
        />
      </BottomSheet>
    </div>
  );
};

export default WheelRoute;
