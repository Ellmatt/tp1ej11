import React from "react";
import {Button, Card} from "react-bootstrap";


const Noticia = (props) => {
  return (
   <section className="d-flex justify-content-center">
    <Card className="w-50 my-3 " >
      <Card.Img src={props.imagen}></Card.Img>
      <Card.Body>
        <Card.Subtitle>{props.subtitulo}</Card.Subtitle>
        <Card.Title className="text-center">{props.titulo}</Card.Title>
        <Card.Text>{props.contenido}</Card.Text>
      </Card.Body>
      <Button className='btn btn-primary' href={props.link}>Ver Noticia Completa</Button>
    </Card>
    
    </section>
  );
};

export default Noticia;
