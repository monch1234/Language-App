import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './App';
import { Reducer } from './redux/Reducer';
import { createStore } from './redux/store';

const store = createStore(
    Reducer, 0
  )
window.store = store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));