const ADD_ITEM = 'PhonesApp/ShoppingCart/ADD_ITEM';
const REMOVE_ITEM = 'PhonesApp/ShoppingCart/REMOVE_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case REMOVE_ITEM:
      const itemToRemove = action.payload;
      return state.filter(item => item.id !== itemToRemove.id);

    default:
      return state;
  }
};

export default reducer;
