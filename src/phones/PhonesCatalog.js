import React from 'react';
const BASE_IMG_URL = 'https://mate-academy.github.io/fs_on_dec18/public/';

const PhonesCatalog = ({ phones, onPhoneSelected }) => {
  if (phones.length === 0) {
    return <p>No pones</p>;
  }

  return (
    <ul className="phones">
      {phones.map(phone => (
        <li className="thumbnail" key={phone.id}>
          <b>[#{phone.age}] </b>

          <a
            className="thumb"
            href={'#' + phone.id}
            onClick={() => {
              onPhoneSelected(phone);
            }}
          >
            <img
              alt={phone.name}
              src={BASE_IMG_URL + phone.imageUrl}
            />
          </a>

          <div className="phones__btn-buy-wrapper">
            <button className="btn btn-success">Add</button>
          </div>

          <a href={'#' + phone.id} onClick={() => onPhoneSelected(phone)}>
            {phone.name}
          </a>

          <p>{phone.snippet}</p>
        </li>
      ))}
    </ul>
  );
};

export default PhonesCatalog;
