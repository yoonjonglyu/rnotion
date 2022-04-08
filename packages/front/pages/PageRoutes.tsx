import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="login" element={<div>login</div>} />
        <Route path="workspace" element={<div>workspace</div>} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
