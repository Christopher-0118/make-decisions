import { motion } from 'framer-motion';
import type { TabProps } from '../type';
import './tab.scss';

const Tab = ({ id, label, isActive, onSelect }: TabProps) => {
  return (
    <motion.li
      className="tab"
      role="tab"
      aria-selected={isActive}
      initial={false}
      onClick={() => onSelect(id)}
    >
      <span className="label">{label}</span>
    </motion.li>
  );
};

export default Tab;
