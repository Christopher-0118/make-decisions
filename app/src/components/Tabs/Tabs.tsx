import { useState } from 'react';
import { FLICK_VELOCITY, type TabsProps } from '../type';
import './tabs.css';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import Tab from './Tab';

const Tabs = ({
  settingsContent,
  historyContent,
  defaultTab = 'settings',
  swipeEnabled = true,
  swipeThresholdPx = 60,
}: TabsProps) => {
  const [active, setActive] = useState<'settings' | 'history'>(defaultTab);
  const handleSelect = (tab: 'settings' | 'history') => {
    setActive(tab);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!swipeEnabled) return;

    const { offset, velocity } = info;
    const swipeLeft = offset.x < -swipeThresholdPx || velocity.x < -FLICK_VELOCITY;
    const swipeRight = offset.x > swipeThresholdPx || velocity.x > FLICK_VELOCITY;

    if (active === 'settings' && swipeRight) {
      setActive('history');
      return;
    } else if (active === 'history' && swipeLeft) {
      setActive('settings');
      return;
    }
  };

  return (
    <div className="root">
      <nav className="nav" aria-label="Tabs">
        <ul className="list" role="tablist">
          {settingsContent ? (
            <Tab
              id="settings"
              label="Settings"
              isActive={active === 'settings'}
              onSelect={() => handleSelect('settings')}
            />
          ) : null}

          <Tab
            id="history"
            label="History"
            isActive={active === 'history'}
            onSelect={() => handleSelect('history')}
          />
        </ul>
      </nav>

      <div className="panel" role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="panelInner"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag={swipeEnabled ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
          >
            {active === 'settings' ? settingsContent : null}
            {active === 'history' ? historyContent : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
