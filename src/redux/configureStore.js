import { createStore } from 'redux';


const defaultState = {
  message: 'asdasd'
};

const rootReducer = (state = defaultState, action) => {
  return state;
};

const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default configureStore;
