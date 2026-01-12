import type { TabProps } from '../type';

const Tab = ({ id, active }: TabProps) => {
  return (
    <>
      <label> Tab: {id}</label>
      <label> active: {active}</label>
     
    </>
  );
};

export default Tab;
