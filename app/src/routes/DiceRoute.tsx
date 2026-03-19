import { useCallback, useMemo, useRef, useState } from 'react';
import DiceGroup from '@/components/Dice/DiceGroup';
import { useAppSelector } from '@/hooks/useAppSelector';
import useRandomizer from '@/hooks/useRandomizer';
import { SEED } from './types';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry } from '@/store/diceHistorySlice';
import './page.scss';

const DiceRoute = () => {
  const dispatch = useAppDispatch();
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
  const pendingValuesRef = useRef<number[]>([]);

  const finalizeRoll = useCallback(() => {
    if (!pendingValuesRef.current.length) return;

    setDisplayValues(pendingValuesRef.current);
    setIsRolling(false);
  }, []);

  const roll = () => {
    if (isRolling) {
      finalizeRoll();
      return;
    }

    if (!Number.isFinite(count) || count <= 0) return;

    const generated = generate(count);
    pendingValuesRef.current = generated;
    setPendingValues(generated);
    dispatch(addEntry(generated));
    setIsRolling(true);
  };

  const handleRollEnd = () => {
    finalizeRoll();
  };

  return (
    <div className={'page'}>
      <button
        className={'button-like button-like__roll'}
        onClick={roll}
        aria-label={isRolling ? 'stop roll and show result' : 'roll'}
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
        {isRolling
          ? 'Rolling. Tap again to stop and show the result.'
          : pendingValues.length
            ? `Rolled: ${pendingValues.join(', ')}`
            : 'No result yet'}
      </div>
    </div>
  );
};

export default DiceRoute;
