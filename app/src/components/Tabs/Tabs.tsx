import { useState } from 'react';
import { FLICK_VELOCITY, type TabsProps } from '../type';
import './tabs.scss';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import SegmentedNav from '@/components/SegmentedNav/SegmentedNav';

const tabItems = [
  { id: 'settings', label: 'Settings' },
  { id: 'history', label: 'History' },
] as const;

const Tabs = ({
  settingsContent,
  historyContent,
  defaultTab = 'settings',
  swipeEnabled = true,
  swipeThresholdPx = 60,
}: TabsProps) => {
  const hasSettingsContent = Boolean(settingsContent);
  const initialTab = hasSettingsContent ? defaultTab : 'history';
  const [active, setActive] = useState<'settings' | 'history'>(initialTab);

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
    <div className="tabsLayout">
      <SegmentedNav
        items={hasSettingsContent ? [...tabItems] : [tabItems[1]]}
        activeId={active}
        ariaLabel="Tabs"
        className="tabsNav"
        renderItem={(item, isActive) => (
          <button
            type="button"
            className={['tabButton', isActive ? 'tabButton--active' : ''].filter(Boolean).join(' ')}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleSelect(item.id)}
          >
            <span className="tabButton__label">{item.label}</span>
          </button>
        )}
      />

      <div className="tabsPanel" role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="tabsPanelInner"
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
