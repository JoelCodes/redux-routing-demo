import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { rootReducer, redirecterMW } from './redux-app';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const history = createBrowserHistory();
const store = createStore(connectRouter(history)(rootReducer),
  { data: {} },
  applyMiddleware(routerMiddleware(history), logger, redirecterMW));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'),
);
registerServiceWorker();
