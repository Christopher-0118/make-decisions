import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import History from '@/components/History/History';
import Coin from '@/components/Coin/Coin';
import { useState } from 'react';
import useRandomizer from '@/hooks/useRandomizer';
import { SEED } from './types';
import { SIDE, type CoinSide } from '@/components/type';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addEntry } from '@/store/coinHistorySlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import { clearAllEntries } from '@/store/coinHistorySlice';
import './page.css';

const CoinRoute = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.coinHistory.entries);
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
      <div onClick={handleFlip}>
        <Coin side={coinSide} isFlipping={isFlipping} onFlipEnd={() => setIsFlipping(false)} />
      </div>

      <BottomSheet>
        <Tabs
          historyContent={<History entries={history} onClear={() => dispatch(clearAllEntries())} />}
          defaultTab="history"
        />
      </BottomSheet>
    </div>
  );
};

export default CoinRoute;
