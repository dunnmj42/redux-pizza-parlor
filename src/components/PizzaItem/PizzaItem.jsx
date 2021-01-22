import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

function PizzaItem({ pizza }) {

  const [isItemSelected, setIsItemSelected] = useState(false);
  
  const pizzasInCart = useSelector((store) => store.cartReducer)

  const dispatch = useDispatch();

  const addPizza = (pizzaToAdd) => {
    console.log(`isItemSelected is:`, !isItemSelected);
    setIsItemSelected(!isItemSelected);
    dispatch({ type: "ADD_PIZZA_TO_CART", payload: pizzaToAdd });
  };

  const removePizza = (pizzaToDelete) => {
    console.log(`isItemSelected is:`, !isItemSelected);
    setIsItemSelected(!isItemSelected);
    dispatch({ type: "REMOVE_PIZZA_FROM_CART", payload: pizzaToDelete });
  };

  return (
    <CardColumns className="cardColumns">
      <Card
        bg="light"
        style={{ width: "18rem", textAlign: "center" }}
        border="secondary"
        className="p-3 card"
        key={pizza.id}
      >
        <Card.Img variant="top" className="image" src={pizza.image_path} />
        <Card.Body>
          <Card.Title> {pizza.name} </Card.Title>
          <Card.Text> {pizza.description} </Card.Text>
          <Card.Text> {pizza.price} </Card.Text>
          {!isItemSelected ? (
            <Button variant="primary" onClick={() => addPizza(pizza)}>
              Add Pizza
            </Button>
          ) : (
            <Button variant="danger" onClick={() => removePizza(pizza)}>
              Remove Pizza
            </Button>
          )}
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default PizzaItem;
