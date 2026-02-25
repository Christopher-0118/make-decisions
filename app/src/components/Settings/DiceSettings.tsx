import DiscreteSlider from '@/components/DiscreteSlider/DiscreteSlider';
import { SIDES, COUNTS } from '../type';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setCount, setDice } from '@/store/diceSettingsSlice';

const DiceSettings = () => {
  const dispatch = useAppDispatch();
  const die = useAppSelector((state) => state.diceSettings.dice);
  const count = useAppSelector((state) => state.diceSettings.count);

  return (
    <>
      <DiscreteSlider
        label="Side count:"
        values={SIDES}
        value={die}
        onChange={(next) => dispatch(setDice(next))}
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
