import React from 'react';
import { RouteObject } from 'react-router-dom';

import SignupFeature from '../feature/signup';

const SignUpPage: RouteObject = {
  path: 'SignUp',
  element: <SignupFeature />,
  children: [],
};

export default SignUpPage;
