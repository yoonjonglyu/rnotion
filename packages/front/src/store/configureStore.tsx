import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

interface ConfigureStoreProps {
  children: React.ReactChild;
  initState?: (snapshot: MutableSnapshot) => void;
}

const ConfigureStore: React.FC<ConfigureStoreProps> = props => {
  const { children, initState } = props;
  return <RecoilRoot initializeState={initState}>{children}</RecoilRoot>;
};

export default ConfigureStore;
