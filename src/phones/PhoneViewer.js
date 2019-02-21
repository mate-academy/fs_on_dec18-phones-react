import React from 'react';

const PhoneViewer = ({ phone }) => (
  <div className="PhoneViewer">
    <img
      alt={phone.name}
      className="phone"
      src={phone.images[0]}
    />

    <button>Back</button>
    <button>Add to basket</button>

    <h1>{phone.name}</h1>
    <p>{phone.description}</p>

    <ul className="phone-thumbs">
      {phone.images.map(imageUrl => (
        <li>
          <img
            alt={phone.name}
            src={imageUrl}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default PhoneViewer;
