import { useMemo, useState, lazy, Suspense } from 'react';
import Wheel from '@/components/Wheel/Wheel';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import AppNav from '@/components/AppNav/AppNav';
import useRandomizer from '@/hooks/useRandomizer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { addEntry } from '@/store/wheelHistorySlice';
import { FULL_CIRCLE, SEED, SPINS_COUNT } from './types';
import type { ListModel, Segment } from '@/components/type';
import { clearAllEntries } from '@/store/wheelHistorySlice';
import './page.scss';
import WheelSettings from '@/components/Settings/WheelSettings';

const WheelRoute = () => {
  const count = useAppSelector((state) => state.wheelSettings.count);
  const history = useAppSelector((state) => state.wheelHistory.entries);
  const dispatch = useAppDispatch();

  const activeListId = useAppSelector((state) => state.wheelSettings.activeList);
  const lists: ListModel[] = useAppSelector((state) => state.wheelLists.collection);
  const activeList = lists.find((list) => list.id === activeListId);
  const segments: Segment[] = useMemo(
    () =>
      activeList
        ? activeList.items.map((label, i) => ({ id: `${activeList.id}-${i}`, label }))
        : [],
    [activeList],
  );

  const History = lazy(() => import('@/components/History/History'));
  const [rotation, setRotation] = useState(0);
  const { result, generate } = useRandomizer({ seed: SEED, values: segments, unique: true });

  const spin = (count: number) => {
    setRotation((prev) => prev + FULL_CIRCLE * SPINS_COUNT + Math.random() * FULL_CIRCLE);
    const generatedResults = generate(count);
    dispatch(addEntry(generatedResults.map((s) => s.label)));
  };
  const highlightedIds = useMemo(() => result.map((item) => item.id), [result]);

  return (
    <div className={'page'}>
      <div className="button-like__spin" onClick={() => spin(count)}>
        <Wheel segments={segments} rotationDeg={rotation} highlightedIds={highlightedIds} />
      </div>

      <BottomSheet header={<AppNav />}>
        <Tabs
          settingsContent={<WheelSettings />}
          historyContent={
            <Suspense fallback={<div>Loading...</div>}>
              <History entries={history} onClear={() => dispatch(clearAllEntries())} />
            </Suspense>
          }
          defaultTab="settings"
        />
      </BottomSheet>
    </div>
  );
};

export default WheelRoute;
