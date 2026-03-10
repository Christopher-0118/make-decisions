import type { CountSelectorProps } from '../type';
import './CountSelector.scss';

const CountSelector = ({ value, min, max, onChange }: CountSelectorProps) => {
  return (
    <section className="block__row">
      <div className="blockTitle">Results count:</div>

      <div className="countRow">
        <button
          type="button"
          aria-label="Decrease results count"
          className="countBtn"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
        >
          −
        </button>

        <div className="countValue">{value}</div>

        <button
          type="button"
          aria-label="Increase results count"
          className="countBtn"
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default CountSelector;
