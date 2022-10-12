import React, { useEffect, useState } from "react";
import { Container,  Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Noticia = () => {
  const [noticia, setNoticia] = useState([]);


  useEffect(() => {
    consultarApi();
  }, []);


  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        'https://newsapi.org/v2/everything?q=keyword&apiKey=e0202bd97de3442dbf2f46e29e2c8ecd'
      );
      console.log(respuesta);
      const dato = await respuesta.json();

      console.log(dato['articles']);
      setNoticia(dato['articles']);
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form >
        <Form.Group className="mb-3 d-flex justify-content-center">
          <div className="w-100 my-5 ms-5">
            <Form.Label>Buscar por Categoria</Form.Label>
          </div>
          <div className="w-100 my-5 me-5">
            <Form.Select>
              <option></option>
              <option>entertaiment</option>
              <option>environment</option>
              <option>food</option>
              <option>health</option>
            </Form.Select>
          </div>
          <div className="w-100 my-5 ms-5">
            <Form.Label>Buscar por Pais</Form.Label>
          </div>
          <div className="w-100 my-5 me-5">
            <Form.Select>
              <option>bussines</option>
              <option>entertaiment</option>
              <option>environment</option>
              <option>food</option>
              <option>health</option>
            </Form.Select>
          </div>
        </Form.Group>
        <ListaNoticias noticia={noticia} ></ListaNoticias>
      </Form>
    </Container>
  );
};

export default Noticia;
