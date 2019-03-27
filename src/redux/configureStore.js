import { createStore } from 'redux';


const defaultState = {
  message: 'asdasd'
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default configureStore;
