import Coin from '@/components/Coin/Coin';
import { useState } from 'react';
import useRandomizer from '@/hooks/useRandomizer';
import { SEED } from './types';
import { SIDE, type CoinSide } from '@/components/type';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry } from '@/store/coinHistorySlice';
import './page.scss';

const CoinRoute = () => {
  const dispatch = useAppDispatch();
  const { result, generate } = useRandomizer<CoinSide>({
    seed: SEED,
    values: ['heads', 'tails'],
  });
  const coinSide: CoinSide = result[0] ?? 'heads';
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const handleFlip = () => {
    if (isFlipping) return;
    const picked = generate(SIDE);
    if (picked[0]) dispatch(addEntry(picked[0]));
    setIsFlipping(true);
  };

  return (
    <div className="page">
      <button className="button-like button-like__toss" onClick={handleFlip}>
        <Coin side={coinSide} isFlipping={isFlipping} onFlipEnd={() => setIsFlipping(false)} />
      </button>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {result[0] ? `Tossed: ${result[0]}` : 'No result yet'}
      </div>
    </div>
  );
};

export default CoinRoute;
