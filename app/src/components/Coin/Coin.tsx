import { motion } from 'framer-motion';
import './coin.scss';
import { type CoinProps, FULL_FLIP, HALF_FLIP } from '../type';

const Coin = ({ side, isFlipping, onFlipEnd }: CoinProps) => {
  const endRotation = FULL_FLIP + (side === 'tails' ? HALF_FLIP : 0);

  return (
    <div className="coin_stage">
      <motion.div
        className="coin_motion"
        initial={{ y: 0, scale: 1 }}
        animate={
          isFlipping
            ? {
                y: [0, -6, -140, 0],
                scale: [1, 0.98, 1.02, 1],
              }
            : { y: 0, scale: 1 }
        }
        transition={
          isFlipping
            ? {
                duration: 1.5,
                times: [0, 0.02, 0.55, 1],
                ease: ['easeOut', 'easeOut', 'easeInOut', 'easeOut'],
              }
            : { duration: 0.2 }
        }
      >
        <motion.div
          className={`coin coin-${side}`}
          initial={{ rotateX: 0 }}
          animate={isFlipping ? { rotateX: endRotation } : { rotateX: side === 'heads' ? 0 : 180 }}
          transition={isFlipping ? { duration: 1.5, ease: 'linear' } : { duration: 0 }}
          onAnimationComplete={() => {
            if (isFlipping) onFlipEnd?.();
          }}
        >
          <div className="coin_face coin_face__front">
            <span className="coin_label">Heads</span>
          </div>

          <div className="coin_face coin_face__back">
            <span className="coin_label">Tails</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Coin;
