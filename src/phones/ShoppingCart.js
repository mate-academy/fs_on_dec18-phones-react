import React from 'react';

class ShoppingCart {
  render() {
    return (
      <div className="ShoppingCart">
        <h4>Shopping Cart</h4>

        <ul>
          { itemIds.map(itemId => (

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
