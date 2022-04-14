import React from 'react';
import { RouteObject } from 'react-router-dom';

import MainFeature from '../feature/main';

const MainPage: RouteObject = {
  path: '/',
  element: <MainFeature />,
  children: [],
};

export default MainPage;
