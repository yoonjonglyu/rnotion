import React from 'react';
import { useRoutes } from 'react-router-dom';

import MainPage from './MainPage';
import SigninPage from './SigninPage';
import WorkspacePage from './WorkspacePage';

const PageRoutes: React.FC = () => {
  return useRoutes([MainPage, SigninPage, WorkspacePage]);
};

export default PageRoutes;
