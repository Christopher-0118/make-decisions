import { useState } from 'react';
import DiscreteSlider from '@/components/DiscreteSlider/DiscreteSlider';

const SIDES = [4, 6, 8, 10, 12, 20, 100] as const;
const COUNTS = [1, 2, 3, 4, 5] as const;

const DiceSettings = () => {
  const [sides, setSides] = useState<(typeof SIDES)[number]>(6);
  const [count, setCount] = useState<(typeof COUNTS)[number]>(1);

  return (
    <>
      <DiscreteSlider label="Side count:" values={SIDES} value={sides} onChange={setSides} />
      <DiscreteSlider label="Dice count:" values={COUNTS} value={count} onChange={setCount} />
    </>
  );
};

export default DiceSettings;
