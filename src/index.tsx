import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './mock/mock'
import './global.less';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import App from './App';
import GridLayoutHome from "@/GridLayoutHome";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 开启React.StrictMode严格模式会让整个App执行两次渲染 但不影响生产环境的构建
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
