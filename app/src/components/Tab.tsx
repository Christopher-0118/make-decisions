import type { TabProps } from './type';

const Tab = ({ page, active, data }: TabProps) => {
  return (
    <>
      <label> Tab: {page}</label>
      <label> active: {active}</label>
      <label> data: {data}</label>
    </>
  );
};

export default Tab;
