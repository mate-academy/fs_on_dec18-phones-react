import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeItem } from '../ducks/shoppingCart';

const ShoppingCart = ({ items, removeItem }) => (
  <div className="ShoppingCart">
    <h4>Shopping Cart</h4>

    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}

          <button onClick={() => removeItem(item)}>-</button>
        </li>
      ))}
    </ul>
  </div>
);

ShoppingCart.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  items: state.shoppingCart
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem(item) {
    const action = removeItem(item);
    dispatch(action)
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
