import { useRef, useState, useEffect } from 'react';
import './discreteSlider.scss';
import type { DiscreteSliderProps } from '../type';

const DiscreteSlider = <T extends number>({
  label,
  values,
  value,
  onChange,
}: DiscreteSliderProps<T>) => {
  const count = values.length;
  const index = Math.max(0, values.indexOf(value));
  const maxIndex = Math.max(0, count - 1);
  const percent = maxIndex === 0 ? 0 : (index / maxIndex) * 100;
  const markRef = useRef<HTMLButtonElement | null>(null);
  const [markWidth, setMarkWidth] = useState(0);

  useEffect(() => {
    const el = markRef.current;

    if (!el) return;

    const update = () => {
      const next = el.getBoundingClientRect().width;
      if (next > 0) setMarkWidth(next);
    };

    update();

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(update);
      ro.observe(el);
    } else {
      window.addEventListener('resize', update);
    }

    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [count]);
  const percent01 = maxIndex === 0 ? 0 : index / maxIndex;

  const setMarker = () =>
    values.map((val, idx) => {
      const active = idx <= index;
      const current = idx === index;

      return (
        <button
          key={val}
          type="button"
          ref={idx === 0 ? markRef : undefined}
          className={[
            'mark',
            active ? 'mark__active' : 'mark__inactive',
            current ? 'mark__current' : '',
          ].join(' ')}
          onClick={() => onChange(val)}
          aria-label={`Set ${label} to ${val}`}
        />
      );
    });

  return (
    <div className="discrete-slider">
      <div className="label">{label}</div>
      <div className="slider-wrapper">
        <div className="track">
          <div className="fill" style={{ width: `${percent}%` }} />
        </div>

        <div className="marks">{setMarker()}</div>

        <div
          className="badge"
          style={{
            left: `calc(${markWidth / 2}px + ${percent01} * (100% - ${markWidth}px))`,
          }}
          aria-hidden="true"
        >
          <div className="badge-pointer" />
          <div className="badge-box">{value}</div>
        </div>

        <input
          className="native"
          type="range"
          min={0}
          max={maxIndex}
          step={1}
          value={index}
          onChange={(e) => {
            const nextIndex = Number(e.target.value);
            onChange(values[nextIndex]);
          }}
          aria-label={label}
        />
      </div>
    </div>
  );
};

export default DiscreteSlider;
