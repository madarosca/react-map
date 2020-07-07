import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import appReducer from 'reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(appReducer, initialState, storeEnhancers());

// Set globals

global.dispatch = (type, payload) => {

  if (type.type) {
    return Promise.resolve(store.dispatch(type))
  } else {
    return Promise.resolve(store.dispatch({ type, payload }))
  }
};
global.getState = store.getState;


if (module.hot) {
  module.hot.accept('reducers');
}

export default store;
