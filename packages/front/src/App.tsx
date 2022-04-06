import React from 'react';
import { RecoilRoot } from 'recoil';
import PageRoutes from '../pages/PageRoutes';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <PageRoutes />
    </RecoilRoot>
  );
};

export default App;
