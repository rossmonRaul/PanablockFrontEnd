import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';

const ObservacionesMantenimiento = () => {

    const [listaObservaciones, setListaObservaciones] = useState([]);
    const [nuevoElementoObservacion, setnuevoElementoObservacion] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
    }, []);

    const ObtenerListaObservaciones = () => {
        /* obtener si hay observaciones de mantenimeinto a este encabezado para precargarlos*/
    }

    const onClickAgregarObservacion = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setListaObservaciones(listaObservaciones => [...listaObservaciones, nuevoElementoObservacion]);

        }
        setValidated(true);
        e.preventDefault();
        setnuevoElementoObservacion("");
    }

    const onChangeNuevoElementoObservacion = (e) => setnuevoElementoObservacion(e.target.value);

    return (

        <>
            <Col className="section-container">
                <h3 class="observaciones-title">Observaciones de Mantenimiento</h3>
                <br />
                <hr />
                <Form noValidate validated={validated} onSubmit={onClickAgregarObservacion} >
                    <Row>
                        <Col>
                            <TextArea id='txt-nuevaObservacion' type='text' placeholder='Ingrese una nueva observación' value={nuevoElementoObservacion}
                                onChange={onChangeNuevoElementoObservacion} mensajeValidacion="La observación es requerida" />
                        </Col>
                        <Col className="col-md-4">
                            <br />
                            <Button variant="primary" type="submit" size="md">Agregar <img src={add} /> </Button>
                            <br />
                            <hr />
                        </Col>
                    </Row>
                </Form>
                <br />
                <hr />
                {listaObservaciones.length > 0 ?

                <ListGroup variant="flush">
                    {
                        listaObservaciones.map((item) => (
                            <ListGroup.Item>{item}</ListGroup.Item>
                        ))
                    }
                 </ListGroup>
                 :   
                    <p>No hay datos disponibles</p>
                }
            </Col>
            
        </>
    );
}

export default ObservacionesMantenimiento; 