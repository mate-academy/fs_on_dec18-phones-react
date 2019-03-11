import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { BASE_IMG_URL } from '../config';

const PhoneViewer = ({ phone }) => {
  const shoppingCart = useContext(ShoppingCartContext);

  return (
    <div className="PhoneDetailsPage">
      <img
        alt={phone.name}
        className="phone"
        src={BASE_IMG_URL + phone.images[0]}
      />

      <button onClick={() => shoppingCart.addItem(phone)}>Add to basket</button>

      <h1>{phone.name}</h1>
      <p>{phone.description}</p>

      <ul className="phone-thumbs">
        {phone.images.map(imageUrl => (
          <li key={imageUrl}>
            <img alt={phone.name} src={BASE_IMG_URL + imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

PhoneViewer.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneViewer;
