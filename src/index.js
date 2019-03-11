import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShoppingCartProvider } from './ShoppingCartContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
