import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_CART':
      return action.payload;
    case 'CLEAR':
      return action.payload;
    default:
      return state;
  }
}

const pizzaReducer = (state = [], action) => {

  switch(action.type) {
    case 'SET_PIZZAS':
      return action.payload
    default:
      return state;
  }
}

const customerReducer = (state = [], action) => {

  switch(action.type) {
    case 'SET_CUSTOMER_INFO':
      return action.payload;
    case 'CLEAR':
      return action.payload;
    default:
      return state;
  }
}

const reduxStore = createStore(
  combineReducers({
    cartReducer,
    pizzaReducer,
    customerReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
