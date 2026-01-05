import Tab from './Tab';

const BottomSheet = (pageName: string) => {
  return (
    <>
      <Tab page={pageName} active={true} data="settings" />
      <Tab page={pageName} active={false} data="history" />
    </>
  );
};

export default BottomSheet;
