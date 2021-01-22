import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";


function SelectPizza() {

  const history = useHistory();
  const dispatch = useDispatch();

  const pizzas = useSelector((store) => store.pizzaReducer);
  const pizzasInCart = useSelector((store) => store.currentCartReducer)


  const proceedToForm = (pizzasInCart) => {
    console.log(`Moving to customer info page`);
    dispatch({ type: "SET_CART", payload: pizzasInCart });
    history.push("/form");
  };

  return (
    <section>

      <Header />
      <h2>Step 1: Select Your Pizza</h2>

      {pizzas.map((pizza, i) => (
        <PizzaItem key={i} pizza={pizza}/>
      ))}

      <div className="proceedToForm">
        <Button variant="success" size="lg" block onClick={() => proceedToForm(pizzasInCart)}>Next Step</Button>
      </div>

    </section>
  );
}

export default SelectPizza;
