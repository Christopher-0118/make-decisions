import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import History from '@/components/History/History';
import Settings from '@/components/Settings/Settings';
import Coin from '@/components/Coin/Coin';

import './page.css';
import { useState } from 'react';

const CoinRoute = () => {
  const [coinSide, setCoinSide] = useState<'heads' | 'tails'>('heads');
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  return (
    <div className="page">
      <Coin side={coinSide} isFlipping={isFlipping} onFlipEnd={() => setIsFlipping(false)} />
      <button
        className={'goButton'}
        onClick={() => {
          if (isFlipping) return;
          setCoinSide((prev) => (prev === 'heads' ? 'tails' : 'heads'));
          setIsFlipping(true);
        }}
      >
        Flip
      </button>
      <BottomSheet>
        <Tabs settingsContent={<Settings />} historyContent={<History />} defaultTab="history" />
      </BottomSheet>
    </div>
  );
};

export default CoinRoute;
