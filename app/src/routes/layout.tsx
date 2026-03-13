import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import './layout.scss';

export default function Layout() {
  const location = useLocation();

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
    </div>
  );
}
