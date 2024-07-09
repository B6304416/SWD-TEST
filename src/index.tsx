import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Test1 from './component/test1';
import Test3 from './component/test3';
import AppLayout from './layout/AppLayout';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './tool/i18n';
import './App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path="test1" element={<Test1 />} />
          <Route path="test3" element={<Test3 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
