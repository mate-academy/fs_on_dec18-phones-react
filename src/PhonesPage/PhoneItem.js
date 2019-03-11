import React from 'react';
import { Link } from 'react-router-dom';

import { withShoppingCart } from '../ShoppingCartContext';
import { BASE_IMG_URL } from '../config';

const PhoneItem = ({ phone, phoneUrl, shoppingCart }) => (
  <li className="thumbnail">
    <span>### {phone.age}</span>

    <Link className="thumb" to={phoneUrl}>
      <img width="80px" alt={phone.name} src={BASE_IMG_URL + phone.imageUrl} />
    </Link>

    <div className="phones__btn-buy-wrapper">
      <button
        className="btn btn-success"
        onClick={() => shoppingCart.addItem(phone)}
      >
        Add
      </button>
    </div>

    <Link to={phoneUrl}>{phone.name}</Link>

    <p>{phone.snippet}</p>
  </li>
);

export default withShoppingCart(PhoneItem);
