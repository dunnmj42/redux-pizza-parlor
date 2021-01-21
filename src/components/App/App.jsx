import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios
      .get("/pizza")
      .then((response) => {
        // do stuff with data! response.data
        const action = {
          type: "SET_PIZZAS",
          payload: response.data,
        };
        dispatch(action);
      })
      .catch((error) => {
        alert("error in fetchPizzas", error);
        console.error(error);
      });
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <main>
          <Route path="/">
            <SelectPizza />
          </Route>
          <Route path="/form">
            <CustomerForm />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
