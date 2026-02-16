import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Dice from '@/components/Dice/Dice';
import Tabs from '@/components/Tabs/Tabs';
import DiceSettings from '@/components/Settings/DiceSettings';

const DiceRoute = () => {
  const roll = () => {
    console.log('rolled');
  };

  return (
    <div className={'page'}>
      <Dice />
      <button className={'goButton'} onClick={roll}>
        Roll
      </button>
      {/* <div>Picked: {result.map((s) => s.label).join(', ') || '—'}</div> */}

      <BottomSheet>
        <Tabs
          settingsContent={<DiceSettings />}
          historyContent={<div>History will be displayed here.</div>}
          defaultTab="settings"
        />
      </BottomSheet>
    </div>
  );
};

export default DiceRoute;
