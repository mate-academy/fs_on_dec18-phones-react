import React from 'react';
import PropTypes from 'prop-types';

import { withShoppingCart } from '../ShoppingCartContext';

const ShoppingCart = ({ shoppingCart }) => (
  <div className="ShoppingCart">
    <h4>Shopping Cart</h4>

    <ul>
      {shoppingCart.items.map(item => (
        <li key={item.id}>
          {item.name}

          <button onClick={() => shoppingCart.removeItem(item)}>-</button>
        </li>
      ))}
    </ul>
  </div>
);

const shoppingCartType = {
  removeItem: PropTypes.func.isRequired,
};

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.shape(shoppingCartType).isRequired,
};

export default withShoppingCart(ShoppingCart);
