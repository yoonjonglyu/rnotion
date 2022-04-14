import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootNode = document.querySelector('#app');
if (rootNode === null) console.error('루트 노드를 찾을 수 없습니다.');
else {
  ReactDOM.createRoot(rootNode).render(
    <Router>
      <App />
    </Router>
  );
}
