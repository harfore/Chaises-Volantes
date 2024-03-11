import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:productId" element={<PresentationProduit />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
