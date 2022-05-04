import React from 'react';

import ConfigureStore from './store/configureStore';
import PageRoutes from './pages/PageRoutes';

const App: React.FC = () => {
  return (
    <ConfigureStore>
      <PageRoutes />
    </ConfigureStore>
  );
};

export default App;
