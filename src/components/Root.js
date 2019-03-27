import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../App';
import { ShoppingCartProvider } from '../ShoppingCartContext';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
