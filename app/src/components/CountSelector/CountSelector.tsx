import type { CountSelectorProps } from '../type';
import styles from './CountSelector.module.css';

const CountSelector = ({ value, min, max, onChange }: CountSelectorProps) => {
  return (
    <section className={styles.block}>
      <div className={styles.blockTitle}>Results count:</div>

      <div className={styles.countRow}>
        <button
          type="button"
          className={styles.countBtn}
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
        >
          −
        </button>

        <div className={styles.countValue}>{value}</div>

        <button
          type="button"
          className={styles.countBtn}
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
