import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="ShoppingCart">
        <h4>Shopping Cart</h4>

        <ul>
          { [].map(itemId => (

            <li>
              { itemId } ({ this._itemsMap[itemId] })
              <button data-element="remove">-</button>
            </li>

          )) }
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
