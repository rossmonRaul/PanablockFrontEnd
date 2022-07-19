import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Encabezado from "../producciondiaria/encabezado";
import DesgloseProduccion from '../producciondiaria/desgloseProduccion';
import TotalesProduccion from '../producciondiaria/totalesProduccion';
import Agregados from '../producciondiaria/agregados';
import Turnos from '../producciondiaria/turnos'
import ObservacionesMantenimiento from '../producciondiaria/observacionesMantenimiento';
import '../../styles/producciondiaria.css';

const ProduccionDiaria = ({ data }) => {

    const [idEncabezadoProduccionDiaria, setidEncabezadoProduccionDiaria] = useState(data.idEncabezadoProduccionDiaria);

    useEffect(() => {

    }, []);

    const ObtenerEncabezadoProduccionDiaria = async () => {      
           /*Obtener id}*/
    }

    const ObtenerDetalleProduccionDiaria = async () => {
        /*Obtener id}*/
    }

    const ObtenerTotalesProduccionDiaria = async () => {
        /*Obtener id, falta el SP}*/
    }

    const ObtenerObservacionesMantenimiento = async () => {
        /*Obtener id}*/
    }

    const ObtenerAgregados = async () => {
        /*Obtener id}*/
    }

    return (
        <>
            <div className="container">
                <br />
                <br />
                <Encabezado />
                <br />
                <DesgloseProduccion />
                <br />
                <br />
                <Turnos />
                <br />
                <br />
                <TotalesProduccion />
                <br />
                <hr />
                <br />
                <Row>
                    <ObservacionesMantenimiento />
                    <Agregados />
                </Row>
                <br />
                <br />
            </div>

        </>

    );
}

export default ProduccionDiaria;