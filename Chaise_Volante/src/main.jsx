import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PresentationProduit from './Componenets/PresentationProduit/PresentationProduit.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { getAllData, getSingleFurniture } from './data.js';

const router = createBrowserRouter([
  {
    element:<App />,
    path:"/",
    loader:getAllData
  },
  {
    element:<PresentationProduit />,
    path:"/product/:productId",
    loader:getSingleFurniture
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)