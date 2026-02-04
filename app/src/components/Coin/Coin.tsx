import { motion } from 'framer-motion';
import './coin.scss';

type CoinProps = {
  side: 'heads' | 'tails';
  isFlipping: boolean;
  onFlipEnd?: () => void; 
}

const Coin = ({ side, isFlipping, onFlipEnd }: CoinProps) => {
  
  return (
    <div className="coin">
      <motion.div
        className={`coin coin-${side}`}
        initial={{ y: 0, rotateX: 0, scale: 1}}
        animate={
          isFlipping ? 
          {
            y: [0, -6, -140, 0],
            rotateX: [0, 180, 540, side],
            scale: [1, 0.98, 1.02, 1],
          }
          : {
            y: 0,
            rotateX: side === "heads" ? 0 : 180,
            scale: 1,
          }
        }
        transition={
          isFlipping 
          ? {
            duration: 1.05,
            times: [0, 0.12, 0.55, 1],
            ease: ["easeOut", "easeOut", "easeInOut", "easeOut"],
          }
          : {
            duration: 0.2
          }
        }
        onAnimationComplete={() => {
          if(isFlipping) onFlipEnd?.();
        }}
      >
        <div className="coin_face coin_face__front">
          <span className="coin_label">Heads</span>
        </div>

        <div className="coin_face coin_face__back">
          <span className="coin_label">Tails</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Coin;