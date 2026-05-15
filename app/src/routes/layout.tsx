import { lazy, Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Tabs from '@/components/Tabs/Tabs';
import AppNav from '@/components/AppNav/AppNav';
import WheelSettings from '@/components/Settings/WheelSettings';
import DiceSettings from '@/components/Settings/DiceSettings';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { clearAllEntries as clearWheelHistory } from '@/store/wheelHistorySlice';
import { clearAllEntries as clearDiceHistory } from '@/store/diceHistorySlice';
import { clearAllEntries as clearCoinHistory } from '@/store/coinHistorySlice';
import './layout.scss';

const History = lazy(() => import('@/components/History/History'));

export default function Layout() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const wheelHistory = useAppSelector((state) => state.wheelHistory.entries);
  const diceHistory = useAppSelector((state) => state.diceHistory.entries);
  const coinHistory = useAppSelector((state) => state.coinHistory.entries);

  const pathname = location.pathname;
  const isWheelRoute = pathname.startsWith('/wheel');
  const isDiceRoute = pathname.startsWith('/dice');
  const isCoinRoute = pathname.startsWith('/coin');

  const sheetContent = isWheelRoute ? (
    <Tabs
      key="wheel-tabs"
      settingsContent={<WheelSettings />}
      historyContent={
        <Suspense fallback={<div>Loading...</div>}>
          <History entries={wheelHistory} onClear={() => dispatch(clearWheelHistory())} />
        </Suspense>
      }
      defaultTab="settings"
    />
  ) : isDiceRoute ? (
    <Tabs
      key="dice-tabs"
      settingsContent={<DiceSettings />}
      historyContent={
        <Suspense fallback={<div>Loading...</div>}>
          <History entries={diceHistory} onClear={() => dispatch(clearDiceHistory())} />
        </Suspense>
      }
      defaultTab="settings"
    />
  ) : isCoinRoute ? (
    <Tabs
      key="coin-tabs"
      historyContent={
        <Suspense fallback={<div>Loading...</div>}>
          <History entries={coinHistory} onClear={() => dispatch(clearCoinHistory())} />
        </Suspense>
      }
      defaultTab="history"
    />
  ) : null;

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="app-main"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {sheetContent ? (
        <BottomSheet open={isSheetOpen} onOpenChange={setIsSheetOpen} header={<AppNav />}>
          {sheetContent}
        </BottomSheet>
      ) : null}
    </div>
  );
}
