import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import DiceSettings from '@/components/Settings/DiceSettings';
import { useAppSelector } from '@/hooks/useAppSelector';
import useRandomizer from '@/hooks/useRandomizer';
import { SEED } from './types';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry, clearAllEntries } from '@/store/diceHistorySlice';
import { lazy, Suspense } from 'react';

const DiceRoute = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.diceHistory.entries);
  const die = useAppSelector((state) => state.diceSettings.dice);
  const count = useAppSelector((state) => state.diceSettings.count);
  const values = Array.from({ length: die }, (_, i) => i + 1);
  const { result, generate } = useRandomizer({ seed: SEED, values: values, unique: false });
  const History = lazy(() => import('@/components/History/History'));
  const roll = () => {
    const generatedResults = generate(count);
    dispatch(addEntry(generatedResults));
  };

  return (
    <div className={'page'}>
      <div>{`dice: d${die}, count: ${count}`}</div>

      <button className={'goButton'} onClick={roll}>
        Roll
      </button>

      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        {result.map((n, i) => (
          <div key={i} style={{ fontSize: 24 }}>
            {n}
          </div>
        ))}
      </div>

      <BottomSheet>
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
