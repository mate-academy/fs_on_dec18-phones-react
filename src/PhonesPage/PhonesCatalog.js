import React from 'react';
import { connect } from 'react-redux';

import PhoneItem from './PhoneItem';

const PhonesCatalog = ({ phones, baseUrl }) => {
  if (phones.length === 0) {
    return <p>No pones</p>;
  }

  return (
    <ul className="phones">
      {phones.map(phone => (
        <PhoneItem
          key={phone.id}
          phone={phone}
          phoneUrl={`${baseUrl}/${phone.id}`}
        />
      ))}
    </ul>
  );
};

const mapState = (state) => {
  return {
    phones: state.phones
  };
};

export default connect(mapState)(PhonesCatalog);
