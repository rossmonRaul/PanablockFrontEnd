import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';

const ObservacionesMantenimientoReporte = ({ listaObservaciones }) => {

  
    return (

        <>
            <Col className="section-container">
                <h3 className="observaciones-title">Observaciones de Mantenimiento</h3>
                <br />
                <hr />
                <br />
                <hr />
                {listaObservaciones.length > 0 ?

                    <ListGroup variant="flush">
                        {
                            listaObservaciones.map((item, index) => (
                                <ListGroup.Item key={index}>{item.descripcion}</ListGroup.Item>
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

export default ObservacionesMantenimientoReporte;