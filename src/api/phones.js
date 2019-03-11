const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static';

export const getAll = async ({ orderBy, query }) => {
  const response = await fetch(`${BASE_URL}/phones/phones.json`);
  const phones = await response.json();
  const pattern = new RegExp(query, 'i');

  return phones
    .filter(phone => pattern.test(phone.name))
    .sort((a, b) => (a[orderBy] >= b[orderBy] ? 1 : -1));
};

export const getById = phoneId => {
  return fetch(`${BASE_URL}/phones/${phoneId}.json`).then(response =>
    response.json(),
  );
};
