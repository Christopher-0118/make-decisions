import { NavLink, Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { Coins, Dices, FerrisWheel } from 'lucide-react';
import './layout.scss';

const navItems = [
  { to: '/wheel', label: FerrisWheel },
  { to: '/dice', label: Dices },
  { to: '/coin', label: Coins },
];

export default function Layout() {
  const location = useLocation();

  const activeIndex = Math.max(
    0,
    navItems.findIndex((x) => x.to === location.pathname),
  );

  return (
    <div className="app-root">
      <nav className="app-nav" data-active-index={activeIndex}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              ['app-nav-link', isActive ? 'app-nav-link--active' : ''].filter(Boolean).join(' ')
            }
            aria-label={item.to.replace('/', '')}
          >
            <item.label />
          </NavLink>
        ))}
      </nav>

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
