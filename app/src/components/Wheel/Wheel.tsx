import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CENTER, RADIUS, type WheelProps } from '../type';
import './Wheel.scss';

const HUB_RADIUS = 5;

const Wheel = ({ segments, highlightedIds, rotationDeg = 0 }: WheelProps) => {
  const highlighted = useMemo(() => new Set(highlightedIds), [highlightedIds]);
  const slices = useMemo(() => {
    const segmentsNumber = segments.length;

    if (segmentsNumber === 0) return [];

    const toneCycle =
      segmentsNumber % 2 === 0
        ? ['wheel__slice-path--primary', 'wheel__slice-path--secondary-a']
        : [
            'wheel__slice-path--primary',
            'wheel__slice-path--secondary-a',
            'wheel__slice-path--secondary-b',
          ];

    const polarToXY = (cx: number, cy: number, r: number, a: number) => ({
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
    });

    const getToneClass = (idx: number) => {
      if (toneCycle.length === 3 && segmentsNumber % 3 === 1 && idx === segmentsNumber - 1) {
        return toneCycle[1];
      }
      return toneCycle[idx % toneCycle.length];
    };

    const angle = (2 * Math.PI) / segmentsNumber;

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

      return { seg, d, textPos, midDeg, toneClass: getToneClass(idx), key: seg.id };
    });
  }, [segments]);

  return (
    <motion.svg
      className="wheel"
      viewBox="0 0 100 100"
      animate={{ rotate: rotationDeg }}
      transition={{ duration: 1.2, ease: [0.17, 0.67, 0.12, 1] }}
    >
      <circle className="wheel__base" cx={CENTER} cy={CENTER} r={RADIUS} />
      {slices.map((s) => {
        const isOn = highlighted.has(s.seg.id);
        const state = isOn ? 'wheel__slice-path wheel__slice-path--active' : 'wheel__slice-path';

        return (
          <g key={s.key} className="wheel__slice">
            <path d={s.d} className={`${state} ${s.toneClass}`} />
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
      <circle className="wheel__hub" cx={CENTER} cy={CENTER} r={HUB_RADIUS} />
    </motion.svg>
  );
};

export default Wheel;
