import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import List from './List';
import { Provider } from "react-redux";
import store from './app/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <List />,
  </Provider>,

  document.getElementById('root')
);

reportWebVitals();
