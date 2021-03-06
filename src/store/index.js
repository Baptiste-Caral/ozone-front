/* eslint-disable linebreak-style */
// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : middlewares
import authMiddleware from 'src/store/middleware/authMiddleware';
import registerMiddleware from 'src/store/middleware/registerMiddleware';
import eventsMiddleware from 'src/store/middleware/eventsMiddleware';
import userIdMiddleware from 'src/store/middleware/userIdMiddleware';
import userDataMiddleware from 'src/store/middleware/userDataMiddleware';
import modifyProfileMiddleware from 'src/store/middleware/modifyProfileMiddleware';
import createEventMiddleware from 'src/store/middleware/createEventMiddleware';
import setUserEventMiddleware from 'src/store/middleware/setUserEventMiddleware';


// == Import : local
import reducer from './reducer';


// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    registerMiddleware,
    eventsMiddleware,
    userIdMiddleware,
    userDataMiddleware,
    modifyProfileMiddleware,
    createEventMiddleware,
    setUserEventMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
