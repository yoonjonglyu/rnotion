import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 *
 * @return {string}
 */
const rootNode = document.querySelector('#app');

if (rootNode === null) console.error('루트 노드를 찾을 수 없습니다.');
else {
  ReactDOM.createRoot(rootNode).render(
    <div>새로 생긴 기능은 어떻게 구성해야할까?</div>
  );
}
