import { NavLink, useLocation } from 'react-router';
import { Coins, Dices, FerrisWheel } from 'lucide-react';
import SegmentedNav from '@/components/SegmentedNav/SegmentedNav';
import './appNav.scss';

const navItems = [
  { id: '/wheel', label: 'Wheel', icon: FerrisWheel, ariaLabel: 'wheel' },
  { id: '/dice', label: 'Dice', icon: Dices, ariaLabel: 'dice' },
  { id: '/coin', label: 'Coin', icon: Coins, ariaLabel: 'coin' },
];

const isRoutePath = (pathname: string, route: string) =>
  pathname === route || pathname.startsWith(`${route}/`);

const AppNav = () => {
  const location = useLocation();
  const activeId = navItems.find((item) => isRoutePath(location.pathname, item.id))?.id ?? '/wheel';

  return (
    <SegmentedNav
      items={navItems}
      activeId={activeId}
      ariaLabel="Primary navigation"
      className="appNav"
      renderItem={(item, isActive) => (
        <NavLink
          to={item.id}
          className={['appNav__link', isActive ? 'appNav__link--active' : '']
            .filter(Boolean)
            .join(' ')}
          aria-label={item.ariaLabel}
        >
          <item.icon />
        </NavLink>
      )}
    />
  );
};

export default AppNav;
