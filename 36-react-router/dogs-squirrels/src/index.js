import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './reducer';

const defaultState = {
 dogLikes: 0,
 squirrelLikes: 0
};

let store = createStore(reducer, defaultState);

console.log('store', store.getState());
store.dispatch({ type: 'DOGS' });
console.log('store', store.getState());

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);
