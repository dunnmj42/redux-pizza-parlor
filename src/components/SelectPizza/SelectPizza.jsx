import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header"

function SelectPizza() {
  const history = useHistory();
  const dispatch = useDispatch();

  const pizzas = useSelector((store) => store.pizzaReducer);

  const [isItemSelected, setIsItemSelected] = useState(false);

  const [pizzasInCart, setPizzasInCart] = useState([]);

  const toggleSelect = (pizza) => {
    console.log(`isItemSelected is:`, !isItemSelected);
    setIsItemSelected(!isItemSelected);
    if (isItemSelected) {
      setPizzasInCart([...pizzasInCart, pizza]);
    } else if (!isItemSelected) {
      const matchPizza = (pizza) => pizza.id !== pizza.id;
      setPizzasInCart.filter(matchPizza);
    }
  };

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
        <PizzaItem key={i} pizza={pizza} />
      ))}
      {!isItemSelected ? (
        <Button onClick={() => toggleSelect(pizza)}>Add Pizza</Button>
      ) : (
        <Button onClick={() => toggleSelect(pizza)}>Remove Pizza</Button>
      )}
      <div className="proceedToForm">
        <Button onClick={() => proceedToForm(pizzasInCart)}></Button>
      </div>
    </section>
  );
}

export default SelectPizza;
