import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../ducks/shoppingCart';
import { BASE_IMG_URL } from '../config';

const PhoneItem = ({ phone, phoneUrl, addItem }) => (
  <li className="thumbnail">
    <span>### {phone.age}</span>

    <Link className="thumb" to={phoneUrl}>
      <img width="80px" alt={phone.name} src={BASE_IMG_URL + phone.imageUrl} />
    </Link>

    <div className="phones__btn-buy-wrapper">
      <button
        className="btn btn-success"
        onClick={addItem}
      >
        Add
      </button>
    </div>

    <Link to={phoneUrl}>{phone.name}</Link>

    <p>{phone.snippet}</p>
  </li>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  addItem() {
    const action = addItem(ownProps.phone);
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(PhoneItem);
