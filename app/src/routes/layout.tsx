import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/wheel', label: 'Wheel' },
  { to: '/dice', label: 'Dice' },
  { to: '/coin', label: 'Coin' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="app-logo">
          Make Decisions
        </Link>
        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                ['app-nav-link', isActive ? 'app-nav-link--active' : ''].filter(Boolean).join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

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
