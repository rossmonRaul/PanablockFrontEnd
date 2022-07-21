import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import EncabezadoReporte from "./encabezadoReporte";
import DesgloseProduccionReporte from './desgloseProduccionReporte';
import TurnosReportes from './turnosReportes';
import TotalesReportes from './totalesReportes';
import AgregadosReporte from './agregadosReporte';
import ObservacionesMantenimientoReporte from './observacionesReporte';
import '../../styles/producciondiaria.css';

const ProduccionDiaria = ({ datosEncabezado, datosDesglose, datosTurnos, datosTotales, datosObservaciones, datosAgregados }) => {


    /*const [Encabezado, setEncabezado] = useState([]);
    const [Desglose, setDesglose] = useState([]);
    const [Turno, setTurno] = useState([]);*/



    useEffect(() => {
       
    }, []);


    return (
        <>

                <div className="container">
                    <br />
                    <br />
                    <EncabezadoReporte data={datosEncabezado} />
                    <br />
                    <DesgloseProduccionReporte listaDatos={datosDesglose} />
                    <br />
                    <br />
                    <TurnosReportes data={datosTurnos} />
                    <br />
                    <br />
                    {/* <TotalesReportes data={datosTotales} />
                <br />
                <hr />
                <br />
                <Row>
                    <ObservacionesMantenimientoReporte listaObservaciones={datosObservaciones} />
                    <AgregadosReporte listaAgregados={datosAgregados} />
                </Row>
                <br />
                <br />*/}
                </div>
        </>

    );
}

export default ProduccionDiaria;