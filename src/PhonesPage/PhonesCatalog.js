import React from 'react';

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

export default PhonesCatalog;
