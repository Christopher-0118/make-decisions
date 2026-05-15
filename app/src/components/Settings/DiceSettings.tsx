import DiscreteSlider from '@/components/DiscreteSlider/DiscreteSlider';
import d4Icon from '@/assets/i_d4.png';
import d6Icon from '@/assets/i_d6.png';
import d8Icon from '@/assets/i_d8.png';
import d10Icon from '@/assets/i_d10.png';
import d12Icon from '@/assets/i_d12.png';
import d20Icon from '@/assets/i_d20.png';
import { SIDES, COUNTS } from '../type';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCount, setDice } from '@/store/diceSettingsSlice';

const DiceSettings = () => {
  const dispatch = useAppDispatch();
  const die = useAppSelector((state) => state.diceSettings.dice);
  const count = useAppSelector((state) => state.diceSettings.count);
  const sideCountIcons = {
    4: d4Icon,
    6: d6Icon,
    8: d8Icon,
    10: d10Icon,
    12: d12Icon,
    20: d20Icon,
  };

  return (
    <>
      <DiscreteSlider
        label="Side count:"
        values={SIDES}
        value={die}
        onChange={(next) => dispatch(setDice(next))}
        markIcons={sideCountIcons}
      />
      <DiscreteSlider
        label="Dice count:"
        values={COUNTS}
        value={count}
        onChange={(next) => dispatch(setCount(next))}
      />
    </>
  );
};

export default DiceSettings;
