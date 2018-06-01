import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools';

import reducers from './reducers';
import DevTools from '../components/DevTools';


const middleware = [];
middleware.push(createLogger());

const enhancer = compose(
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);
function getDebugSessionKey () {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : enhancer
    )
  );

  return { store: store };
}
