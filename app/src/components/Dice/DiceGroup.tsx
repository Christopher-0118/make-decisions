import { useCallback, useEffect, useMemo, useRef } from 'react';
import Die from './Die';
import type { DiceGroupProps } from '../type';
import './DiceGroup.css';

const DiceGroup = ({ count, faces, values, isRolling, onRollEnd }: DiceGroupProps) => {
  const finishedRef = useRef(0);
  const expectedCountRef = useRef(count);

  useEffect(() => {
    if (isRolling) finishedRef.current = 0;
  }, [isRolling]);

  const shownValues = useMemo(() => {
    const arr = new Array<number>(count).fill(1);
    for (let i = 0; i < count; i++) arr[i] = values[i] ?? 1;
    return arr;
  }, [count, values]);

  const handleOneDieEnd = useCallback(() => {
    if (!isRolling) return;

    finishedRef.current += 1;

    if (finishedRef.current >= expectedCountRef.current) {
      onRollEnd?.();
    }
  }, [isRolling, onRollEnd]);

  return (
    <div className={'dice-wrapper'}>
      {shownValues.map((value, i) => (
        <Die
          key={`${faces}-${count}-${i}`}
          faces={faces}
          value={value}
          isRolling={isRolling}
          onRollEnd={handleOneDieEnd}
        />
      ))}
    </div>
  );
};

export default DiceGroup;
