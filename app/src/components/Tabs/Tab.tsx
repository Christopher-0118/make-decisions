import { motion } from 'framer-motion';
import type { TabProps } from '../type';
import './tab.css';

const Tab = ({ id, label, isActive, onSelect }: TabProps) => {
  return (
    <motion.li
      className={"tab"}
      role="tab"
      aria-selected={isActive}
      initial={false}
      animate={{
        backgroundColor: isActive ? "rgba(0, 0, 0, 0.06)" : "transparent",
      }}
      onClick={() => onSelect(id) }
    >
      <span className="label">
        {label}
      </span>
      {isActive ? (<motion.div className="underline" layoutId="tabs-underline" />) : null}
    </motion.li>
  );
};

export default Tab;
