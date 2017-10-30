import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import mlreducer from './reducers/reducers';

// const configureStore = () => {
//   const middlewares = [thunk];
//   if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(createLogger);
//   }
  
//   const store = createStore(
//     mlreducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(...middlewares)
//   );
//   console.log(store.getState());
//   return store;
// };

// export default configureStore;

export default () => {
  let store = null;
  let middleware = null;

  if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(thunk);
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    middleware = applyMiddleware(thunk, logger);

    // Enable DevTools if browser extension is installed
    if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      );
    }

  }

  store = createStore(
    mlreducer,
    middleware
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  console.log(rootReducer);
  return store;
};