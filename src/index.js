import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import promise from "redux-promise";

import App from './components/App';
import { createStore, applyMiddleware } from "redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reducers from './components/reducers';
import '../src/styles/main.scss';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <App />,
  // </Provider>,
  document.getElementById('root')
);
