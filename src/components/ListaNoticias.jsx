import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Noticia from './Noticia';

const ListaNoticias = (props) => {
    return (
        <ListGroup>
            <Noticia></Noticia>
        </ListGroup>
    );
};

export default ListaNoticias;