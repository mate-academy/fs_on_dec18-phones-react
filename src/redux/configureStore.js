import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from '../ducks/message';

const rootReducer = (state, action) => {
  return {
    message: messageReducer(state.message, action),
    // shoppingCart: shoppingCartReducer(state.shoppingCart, action)
  };
};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools()
  );

  return store;
};

export default configureStore;
