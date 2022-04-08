import React from 'react';
import { Route } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return <Route path="/login" element={<div>login</div>} />;
};

export default LoginPage;
