import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DemoPage from './src/DemoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/demo" element={<DemoPage />} />
         <Route path="/" element={<Navigate to="/demo" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
