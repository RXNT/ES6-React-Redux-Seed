import { createStore as createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const configureStore = (initialState = {}) => {
  const middleware = [thunk];
  const store = createReduxStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  return store;
};

export default configureStore;
