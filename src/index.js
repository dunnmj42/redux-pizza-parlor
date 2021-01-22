import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";
import 'bootstrap/dist/css/bootstrap.min.css'

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return action.payload;
    default:
      return state;
  }
};

const customerReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CUSTOMER_INFO":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      return [...state, action.payload];
    case "REMOVE_PIZZA_FROM_CART":
      const matchPizza = pizza => pizza.id !== action.payload.id
      return state.filter(matchPizza);
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

const totalReducer = (state = 0, action) => {
  switch(action.type) {
    case "UPDOOT_TOTAL":
      return state += Number(action.payload);
    case "DOWNDOOT_TOTAL":
      return state - Number(action.payload);
    default:
      return state;
  }
}

const reduxStore = createStore(
  combineReducers({
    cartReducer,
    pizzaReducer,
    customerReducer,
    totalReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
