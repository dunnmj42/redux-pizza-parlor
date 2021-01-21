import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

function PizzaItem({ pizza, toggleSelect }) {

  const [isItemSelected, setIsItemSelected] = useState(false);

  const [pizzasInCart, setPizzasInCart] = useState([]);

  return (
    <CardColumns className="cardColumns">
      <Card>
        <Card.Img variant="top" src={pizza.image_path} />
        <Card.Body>
          <Card.Title> {pizza.name} </Card.Title>
          <Card.Text> {pizza.description} </Card.Text>
          <Card.Text> {pizza.price} </Card.Text>
          {!isItemSelected ? (
            <Button onClick={() => toggleSelect(pizza)}>Add Pizza</Button>
          ) : (
            <Button onClick={() => toggleSelect(pizza)}>Remove Pizza</Button>
          )}
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default PizzaItem;
