import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import {
  createLogger,
} from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = function configureStore(config, reducers) {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Turned off for prod
  if (process.env.NODE_ENV !== 'production') {
    // Logging Middleware
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });
    middleware.push(logger);
  }

  const composeEnhancers = compose;

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const composedEnhancers = composeEnhancers(...enhancers);

  const rootReducer = combineReducers(reducers);

  // Create Store
  const store = createStore(rootReducer, composedEnhancers);

  return store;
};

export default configureStore;
