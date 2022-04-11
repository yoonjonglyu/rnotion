import React from 'react';
import { Route } from 'react-router-dom';

import LoginFeature from '../feature/login';

const LoginPage: React.FC = () => {
  return <Route path="/login" element={LoginFeature} />;
};

export default LoginPage;
