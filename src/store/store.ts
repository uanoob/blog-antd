import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware =
  process.env.NODE_ENV === 'development'
    ? [thunkMiddleware, logger]
    : [thunkMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

export default store;
