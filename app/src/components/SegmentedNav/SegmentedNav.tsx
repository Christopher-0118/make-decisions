import type { CSSProperties, ReactNode } from 'react';
import './segmentedNav.scss';

type SegmentedNavItem = {
  id: string;
};

type SegmentedNavProps<T extends SegmentedNavItem> = {
  items: T[];
  activeId: string;
  ariaLabel: string;
  className?: string;
  renderItem: (item: T, isActive: boolean) => ReactNode;
};

const SegmentedNav = <T extends SegmentedNavItem>({
  items,
  activeId,
  ariaLabel,
  className,
  renderItem,
}: SegmentedNavProps<T>) => {
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );
  const style = {
    '--segment-count': items.length,
    '--active-index': activeIndex,
  } as CSSProperties;

  return (
    <nav
      className={['segmentedNav', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      data-count={items.length}
      style={style}
    >
      <ul className="segmentedNav__list">
        {items.map((item) => (
          <li key={item.id} className="segmentedNav__item">
            {renderItem(item, item.id === activeId)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SegmentedNav;
