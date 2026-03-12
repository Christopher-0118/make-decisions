import { useEffect, useRef, useState } from 'react';
import { animate, motion, type PanInfo, useMotionValue, useTransform } from 'framer-motion';
import {
  CLOSE_RATIO,
  FLICK_VELOCITY,
  OPEN_RATIO,
  PEEK,
  type UP,
  type DOWN,
  type UNSETTLED,
  SHEET_SPRING_DAMPING,
  SHEET_SPRING_STIFFNESS,
} from '../type';
import './bottomSheet.scss';

const BottomSheet = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const lastDragDirectionRef = useRef<UP | UNSETTLED | DOWN>(0);
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sheetPxHeight, setSheetPxHeight] = useState(0);
  const y = useMotionValue(9999);

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

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyTouchAction = body.style.touchAction;

    if (open) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
    } else {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [open]);

  const closedOffsetY = Math.max(0, sheetPxHeight - PEEK);
  const overlayOpacity = useTransform(y, [0, Math.max(closedOffsetY, 1)], [1, 0]);

  useEffect(() => {
    if (sheetPxHeight === 0 || isDragging) return;

    const controls = animate(y, open ? 0 : closedOffsetY, {
      type: 'spring',
      stiffness: SHEET_SPRING_STIFFNESS,
      damping: SHEET_SPRING_DAMPING,
    });

    return () => controls.stop();
  }, [closedOffsetY, isDragging, open, sheetPxHeight, y]);

  const handleDragStart = () => {
    lastDragDirectionRef.current = 0;
    setIsDragging(true);
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.delta.y < 0) {
      lastDragDirectionRef.current = -1;
      return;
    }
    if (info.delta.y > 0) {
      lastDragDirectionRef.current = 1;
    }
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const lastDirection = lastDragDirectionRef.current;
    setIsDragging(false);

    if (velocity.y > FLICK_VELOCITY) {
      setOpen(false);
      return;
    }
    if (velocity.y < -FLICK_VELOCITY) {
      setOpen(true);
      return;
    }
    if (lastDirection === 1) {
      setOpen(false);
      return;
    }
    if (lastDirection === -1) {
      setOpen(true);
      return;
    }
    if (offset.y > closedOffsetY * CLOSE_RATIO || velocity.y > FLICK_VELOCITY) {
      setOpen(false);
      return;
    }

    if (offset.y < -closedOffsetY * OPEN_RATIO || velocity.y < -FLICK_VELOCITY) {
      setOpen(true);
    }
  };

  return (
    <>
      <motion.div
        className={'overlay'}
        onClick={() => open && setOpen(false)}
        aria-hidden="true"
        style={{
          opacity: overlayOpacity,
          pointerEvents: open ? 'auto' : 'none',
        }}
      />

      <motion.div
        ref={sheetRef}
        className={'sheet'}
        role="dialog"
        aria-modal="true"
        aria-expanded={open}
        style={{ y }}
        drag="y"
        dragConstraints={{ top: 0, bottom: closedOffsetY }}
        dragElastic={0.05}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
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
