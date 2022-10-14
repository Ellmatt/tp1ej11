import React from "react";
import { ListGroup } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  return (
    <ListGroup>
      {props.noticia.map((posicion, titulo) => (
        <Noticia
          titulo={posicion.title}
          link={posicion.url}
          imagen={posicion.urlToImage}
          contenido={posicion.content}
          subtitulo={posicion.author}
          key={titulo}
        />
      ))}
    </ListGroup>
  );
};

export default ListaNoticias;
