import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import LoginPage from './LoginPage';
import WorkspacePage from './WorkspacePage';

const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <MainPage />
        <LoginPage />
        <WorkspacePage />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
