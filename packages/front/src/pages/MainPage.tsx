import React from 'react';
import { Route } from 'react-router-dom';

const MainPage: React.FC = () => {
  return <Route path="/" element={<div>main</div>} />;
};

export default MainPage;
