import React from 'react';

const PhonesCatalog = ({ phones, onPhoneSelected }) => {
  return (
    <ul className="phones">
      { phones.map(phone => (

        <li className="thumbnail" key={phone.id}>
          <span>### { phone.age }</span>

          <a
            className="thumb"
            href={'#' + phone.id}
            onClick={() => onPhoneSelected(phone)}
          >
            <img
              alt={ phone.name }
              src={ phone.imageUrl }
            />
          </a>

          <div className="phones__btn-buy-wrapper">
            <button className="btn btn-success">
              Add
            </button>
          </div>

          <a
            href={'#' + phone.id}
            onClick={() => onPhoneSelected(phone)}
          >
            { phone.name }
          </a>

          <p>{ phone.snippet }</p>
        </li>

      ))}
    </ul>
  );
};

export default PhonesCatalog;
