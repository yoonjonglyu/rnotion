import React from 'react';
import { Route } from 'react-router-dom';

import MainFeature from '../feature/main';

const MainPage: React.FC = () => {
  return <Route path="/" element={MainFeature} />;
};

export default MainPage;
