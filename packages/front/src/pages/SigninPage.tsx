import React from 'react';
import { RouteObject } from 'react-router-dom';

import SigninFeature from '../feature/signin';

const SigninPage: RouteObject = {
  path: 'Signin',
  element: <SigninFeature />,
  children: [],
};

export default SigninPage;
