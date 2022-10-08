import React from "react";
import { Button, Card } from "react-bootstrap";

const Noticia = (props) => {
  return (
    <Card className="w-25">
      <Card.Img src="https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card.Img>
      <Card.Body>
        <Card.Subtitle></Card.Subtitle>
        <Card.Title>titulo</Card.Title>
        <Card.Text>texto</Card.Text>
      </Card.Body>
      <Button variant="primary">Ver Noticia Completa</Button>
    </Card>
  );
};

export default Noticia;
