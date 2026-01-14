import { useEffect, useMemo, useState } from 'react';
import { CONTENT_VARIANTS, FLICK_VELOCITY, type TabsProps } from '../type';
import './tabs.css';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { FULL_CIRCLE } from '@/routes/types';
import Tab from './Tab';

const Tabs = ({
  settingsContent,
  historyContent,
  defaultTab = 'settings',
  swipeEnabled = true,
  swipeThresholdPx = 60,
  onTabChange
}: TabsProps) => {
  const [active, setActive] = useState<'settings' | 'history'>(defaultTab);
  // const [visited, setHistoryVisited] = useState(defaultTab === 'history');
  
  // useEffect(() => {
  //   if(active === 'history') setHistoryVisited(true);

  //   onTabChange?.(active);
  // }, [active, onTabChange]);

  const handleSelect = (tab: 'settings' | 'history') => {
    setActive(tab);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (!swipeEnabled) return;

    const {offset, velocity} = info;
    const swipeLeft = offset.x < -swipeThresholdPx || velocity.x < -FLICK_VELOCITY;
    const swipeRight = offset.x > swipeThresholdPx || velocity.x > FULL_CIRCLE
    if (active === 'settings' && swipeRight) {
      setActive('history');
      return;
    } else if ( active === 'history' && swipeLeft) {
      setActive('settings');
      return;
    }
  };
  
  return (
    <div className="root">
      <nav className="nav" aria-label="Tabs">
        <ul className="list" role="tablist">
          <Tab
            id="settings"
            label="Настройки"
            isActive={active === "settings"}
            onSelect={() => handleSelect("settings")}
          />
          <Tab
            id="history"
            label="История"
            isActive={active === "history"}
            onSelect={() => handleSelect("history")}
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
            drag={swipeEnabled ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
          >
            {active === "settings" ? settingsContent : null}
            {active === "history" ? historyContent : null} 
            {/* {(historyVisited ? historyContent : null) : null} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Tabs;
