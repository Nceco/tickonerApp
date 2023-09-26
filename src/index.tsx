import React from 'react';
import ReactDOM from 'react-dom/client';
import './mock/mock'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 开启React.StrictMode严格模式会让整个App执行两次渲染 但不影响生产环境的构建
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
