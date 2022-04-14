import React from 'react';
import { RouteObject } from 'react-router-dom';

import LoginFeature from '../feature/login';

const LoginPage: RouteObject = {
  path: 'login',
  element: <LoginFeature />,
  children: [],
};

export default LoginPage;

