import { useMemo, useState, lazy, Suspense } from 'react';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import AppNav from '@/components/AppNav/AppNav';
import DiceSettings from '@/components/Settings/DiceSettings';
import DiceGroup from '@/components/Dice/DiceGroup';
import { useAppSelector } from '@/hooks/useAppSelector';
import useRandomizer from '@/hooks/useRandomizer';
import { SEED } from './types';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry, clearAllEntries } from '@/store/diceHistorySlice';
import './page.scss';

const History = lazy(() => import('@/components/History/History'));

const DiceRoute = () => {
  const dispatch = useAppDispatch();

  const history = useAppSelector((state) => state.diceHistory.entries);
  const faces = useAppSelector((state) => state.diceSettings.dice);
  const count = useAppSelector((state) => state.diceSettings.count);

  const values = useMemo(() => Array.from({ length: faces }, (_, i) => i + 1), [faces]);

  const { generate } = useRandomizer<number>({
    seed: SEED,
    values,
    unique: false,
  });

  const [isRolling, setIsRolling] = useState(false);
  const [pendingValues, setPendingValues] = useState<number[]>([]);
  const [displayValues, setDisplayValues] = useState<number[]>([1]);

  const roll = () => {
    if (isRolling) return;
    if (!Number.isFinite(count) || count <= 0) return;

    const generated = generate(count);
    setPendingValues(generated);
    dispatch(addEntry(generated));
    setIsRolling(true);
  };

  const handleRollEnd = () => {
    setDisplayValues(pendingValues);
    setIsRolling(false);
  };

  return (
    <div className={'page'}>
      <button
        className={'button-like button-like__roll'}
        onClick={roll}
        disabled={isRolling}
        aria-label="roll"
      >
        <DiceGroup
          count={count}
          faces={faces}
          values={displayValues}
          isRolling={isRolling}
          onRollEnd={handleRollEnd}
        />
      </button>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {pendingValues.length ? `Rolled: ${pendingValues.join(', ')}` : 'No result yet'}
      </div>

      <BottomSheet header={<AppNav />}>
        <Tabs
          settingsContent={<DiceSettings />}
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

export default DiceRoute;
