import mulberry32 from '@/lib/mulberry32';
import type { useRandomizerArgs } from './type';
import { useCallback, useMemo, useState } from 'react';
import pickMany from '@/lib/pickMany';

const useRandomizer = <T>({ seed, values, unique = true }: useRandomizerArgs<T>) => {
  const rng = useMemo(() => mulberry32(seed), [seed]);
  const [result, setResult] = useState<T[]>([]);
  const generate = useCallback(
    (count: number) => {
      const next = pickMany({
        items: values,
        count,
        rng,
        options: { unique },
      });
      setResult(next);
      return next;
    },
    [values, rng, unique],
  );

  return { result, generate };
};

export default useRandomizer;
