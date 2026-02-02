import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CENTER, RADIUS, type WheelProps } from '../type';
import './Wheel.css';

const Wheel = ({ segments, highlightedIds, rotationDeg = 0 }: WheelProps) => {
  const highlighted = useMemo(() => new Set(highlightedIds), [highlightedIds]);
  const slices = useMemo(() => {
    const segmentsNumber = segments.length;

    if (segmentsNumber === 0) return [];

    const angle = (2 * Math.PI) / segmentsNumber;
    const polarToXY = (cx: number, cy: number, r: number, a: number) => ({
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
    });

    return segments.map((seg, idx) => {
      const a0 = -Math.PI / 2 + idx * angle;
      const a1 = a0 + angle;
      const p0 = polarToXY(CENTER, CENTER, RADIUS, a0);
      const p1 = polarToXY(CENTER, CENTER, RADIUS, a1);

      const largeArcFlag = angle > Math.PI ? 1 : 0;

      const d = [
        `M ${CENTER} ${CENTER}`,
        `L ${p0.x} ${p0.y}`,
        `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${p1.x} ${p1.y}`,
        'Z',
      ].join(' ');

      const mid = a0 + angle / 2;
      const textPos = polarToXY(CENTER, CENTER, RADIUS * 0.62, mid);
      const midDeg = (mid * 180) / Math.PI;

      return { seg, d, textPos, midDeg, idx: idx };
    });
  }, [segments]);

  return (
    <motion.svg
      className="wheel"
      viewBox="0 0 100 100"
      animate={{ rotate: rotationDeg }}
      transition={{ duration: 1.2, ease: [0.17, 0.67, 0.12, 1] }}
    >
      {slices.map((s) => {
        const isOn = highlighted.has(s.seg.id);

        return (
          <g key={s.seg.id} className="wheel__slice">
            <path
              d={s.d}
              className={isOn ? 'wheel__slice-path wheel__slice-path--active' : 'wheel__slice-path'}
            />
            <text
              className="wheel__label"
              x={s.textPos.x}
              y={s.textPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${s.midDeg} ${s.textPos.x} ${s.textPos.y})`}
            >
              {s.seg.label}
            </text>
          </g>
        );
      })}
    </motion.svg>
  );
};

export default Wheel;
