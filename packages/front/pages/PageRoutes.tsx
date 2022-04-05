import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>main</div>} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
