import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import './bottomSheet.scss';
import { CLOSE_RATIO, FLICK_VELOCITY, OPEN_RATIO, PEEK } from '../type';

const BottomSheet = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [sheetPxHeight, setSheetPxHeight] = useState(0);

  useEffect(() => {
    const element = sheetRef.current;
    if (!element) return;

    const resizer = new ResizeObserver(() => {
      setSheetPxHeight(element.getBoundingClientRect().height);
    });

    resizer.observe(element);
    setSheetPxHeight(element.getBoundingClientRect().height);

    return () => resizer.disconnect();
  }, []);

  const closedOffsetY = Math.max(0, sheetPxHeight - PEEK);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;

    if (offset.y > closedOffsetY * CLOSE_RATIO || velocity.y > FLICK_VELOCITY) {
      setOpen(false);
      return;
    } else if (offset.y < -closedOffsetY * OPEN_RATIO || velocity.y < -FLICK_VELOCITY) {
      setOpen(true);
      return;
    }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className={'overlay'}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
        )}
      </AnimatePresence>

      {/* Sheet */}
      <motion.div
        ref={sheetRef}
        className={'sheet'}
        role="dialog"
        aria-modal="true"
        aria-expanded={open}
        initial={{ y: 9999 }}
        animate={{ y: open ? 0 : closedOffsetY }}
        transition={{ type: 'spring', stiffness: 420, damping: 38 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: closedOffsetY }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
      >
        {/* Handle */}
        <button
          type="button"
          className={'handleButton'}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close panel' : 'Open panel'}
        >
          <div className={'grabber'} />
        </button>

        {/* Content */}
        <div className={'content'}>{children}</div>
      </motion.div>
    </>
  );
};

export default BottomSheet;
