import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Wheel from '@/components/Wheel/Wheel';
import useRandomizer from '@/hooks/useRandomizer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { addEntry } from '@/store/wheelHistorySlice';
import { SEED } from './types';
import type { ListModel, Segment } from '@/components/type';
import './page.scss';

const FAST_STEP_DELAY_MS = 75;
const SLOW_STEP_START_DELAY_MS = 95;
const SLOW_STEP_END_DELAY_MS = 240;

const WheelRoute = () => {
  const count = useAppSelector((state) => state.wheelSettings.count);
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
  const { result, generate } = useRandomizer({ seed: SEED, values: segments, unique: true });
  const [runnerId, setRunnerId] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutsRef = useRef<number[]>([]);
  const runnerIndexRef = useRef(0);

  const clearSpinTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutsRef.current = [];
  }, []);

  useEffect(() => clearSpinTimeouts, [clearSpinTimeouts]);

  const scheduleSpinAnimation = useCallback(
    (selectedResults: Segment[]) => {
      if (segments.length === 0 || selectedResults.length === 0) return;

      clearSpinTimeouts();

      const currentIndex = segments.findIndex((segment) => segment.id === runnerId);
      const startIndex =
        currentIndex >= 0 ? currentIndex : runnerIndexRef.current % segments.length;
      const targetIndex = segments.findIndex((segment) => segment.id === selectedResults[0].id);

      if (targetIndex < 0) return;

      const distanceToTarget = (targetIndex - startIndex + segments.length) % segments.length;
      const fastSteps = segments.length;
      const slowSteps = segments.length + distanceToTarget + 1;
      const totalSteps = fastSteps + slowSteps;

      let elapsedMs = 0;

      for (let step = 0; step < totalSteps; step += 1) {
        const animationIndex = (startIndex + step) % segments.length;
        const segmentId = segments[animationIndex].id;
        const progress =
          step < fastSteps || slowSteps <= 1 ? 0 : (step - fastSteps) / (slowSteps - 1);
        const easedProgress = 1 - (1 - progress) ** 2;
        const nextDelay =
          step < fastSteps
            ? FAST_STEP_DELAY_MS
            : Math.round(
                SLOW_STEP_START_DELAY_MS +
                  (SLOW_STEP_END_DELAY_MS - SLOW_STEP_START_DELAY_MS) * easedProgress,
              );

        const timeoutId = window.setTimeout(() => {
          runnerIndexRef.current = animationIndex;
          setRunnerId(segmentId);

          if (step === totalSteps - 1) {
            setIsAnimating(false);
          }
        }, elapsedMs);

        timeoutsRef.current.push(timeoutId);
        elapsedMs += nextDelay;
      }
    },
    [clearSpinTimeouts, runnerId, segments],
  );

  const spin = (count: number) => {
    if (segments.length === 0) return;

    if (isAnimating) {
      clearSpinTimeouts();
      setIsAnimating(false);
      return;
    }

    const generatedResults = generate(count);
    setIsAnimating(true);
    scheduleSpinAnimation(generatedResults);
    dispatch(addEntry(generatedResults.map((s) => s.label)));
  };
  const highlightedIds = useMemo(() => {
    const resultIds = result.map((item) => item.id);
    if (isAnimating) {
      return runnerId ? [runnerId] : [];
    }

    return resultIds;
  }, [isAnimating, result, runnerId]);

  return (
    <div className={'page'}>
      <div className="button-like__spin" onClick={() => spin(count)}>
        <Wheel
          segments={segments}
          highlightedIds={highlightedIds}
          runnerId={isAnimating ? runnerId : null}
        />
      </div>
    </div>
  );
};

export default WheelRoute;
