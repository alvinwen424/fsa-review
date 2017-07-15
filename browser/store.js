import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
