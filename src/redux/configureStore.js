import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import messageReducer from '../ducks/message';
import shoppingCartReducer from '../ducks/shoppingCart';
import phonesReducer from '../ducks/phones';

// const rootReducer = (state = {}, action) => {
//   return {
//     message: messageReducer(state.message, action),
//     shoppingCart: shoppingCartReducer(state.shoppingCart, action)
//   };
// };

const rootReducer = combineReducers({
  message: messageReducer,
  shoppingCart: shoppingCartReducer,
  phones: phonesReducer,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

  return store;
};

export default configureStore;
