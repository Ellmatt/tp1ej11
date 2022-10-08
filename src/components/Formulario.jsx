import React, { useEffect, useState } from "react";
import { Container, Card, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Noticia = () => {
  const [noticia, setNoticia] = useState('');
 

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_1205224bf79acf79975bd3f0035b623fce43a&category=business,entertainment,environment,food,health       "
      );
      console.log(respuesta);
      const dato = await respuesta.json();

      console.log(dato[`results`]);
      setNoticia(dato["results"]);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <Form.Group className="mb-3 d-flex justify-content-center">
          <div className="w-100 my-5 ms-5">
            <Form.Label>Buscar por Categoria</Form.Label>
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
        <ListaNoticias noticias={noticia}></ListaNoticias>
      </Card>
    </Container>
  );
};

export default Noticia;
