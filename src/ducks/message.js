const CHANGE_MESSAGE = 'PhonesApp/Message/CHANGE_MESSAGE';

const reducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return action.payload;

    default:
      return state;
  }
};

export const changeMessage = (message) => {
  return {
    type: CHANGE_MESSAGE,
    payload: message,
  };
};

export default reducer;
