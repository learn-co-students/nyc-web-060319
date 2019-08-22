import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
 <BrowserRouter>
  <Provider store={store}>
   <App />
  </Provider>
 </BrowserRouter>,
 document.getElementById('root')
);
