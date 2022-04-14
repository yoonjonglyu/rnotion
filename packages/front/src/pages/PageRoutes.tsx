import React from 'react';
import { useRoutes } from 'react-router-dom';

import MainPage from './MainPage';
import LoginPage from './LoginPage';
import WorkspacePage from './WorkspacePage';

const PageRoutes: React.FC = () => {
  return useRoutes([MainPage, LoginPage, WorkspacePage]);
};

export default PageRoutes;
