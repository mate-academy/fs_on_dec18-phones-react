import { getAll as getAllPhones } from '../api/phones';
import Filter from '../PhonesPage/Filter';

const ADD_PHONES = 'PhonesApp/Phones/ADD_PHONES';

export const addPhones = (phones) => ({
  type: ADD_PHONES,
  payload: phones
});

export const loadPhones = (location) => {
  return async (dispatch) => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    const orderBy = params.get('orderBy') || Filter.ORDER_BY_AGE;
    const phones = await getAllPhones({ orderBy, query })

    dispatch(addPhones(phones));
  };
};


const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PHONES:
      return [
        ...state,
        ...action.payload,
      ];

    default:
      return state;
  }
};

export default reducer;
