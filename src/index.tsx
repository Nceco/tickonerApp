import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './mock/mock'
import './global.less';
import './Layout/component/logo.less'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 开启React.StrictMode严格模式会让整个App执行两次渲染 但不影响生产环境的构建
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
