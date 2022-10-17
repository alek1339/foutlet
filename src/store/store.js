import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

const composedEnhacers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhacers);