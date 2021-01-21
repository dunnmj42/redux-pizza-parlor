import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function PizzaItem({ pizza }) {

  return (
    <CardColumns className="cardColumns">
      <Card>
        <Card.Img variant="top" src={pizza.image_path} />
        <Card.Body>
          <Card.Title> {pizza.name} </Card.Title>
          <Card.Text> {pizza.description} </Card.Text>
          <Card.Text> {pizza.price} </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default PizzaItem;
