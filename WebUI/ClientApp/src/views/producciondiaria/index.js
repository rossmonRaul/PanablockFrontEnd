import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import Encabezado from "./encabezado";
import DesgloseProduccion from './desgloseProduccion';
import TotalesProduccion from './totalesProduccion';
import Agregados from './agregados';
import Turnos from './turnos'
import ObservacionesMantenimiento from './observacionesMantenimiento';
import '../../styles/producciondiaria.css';


const ProduccionDiaria = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
       <>
        <div className="container">
            <br />
            <br />
                <Encabezado/>
            <br />
                <DesgloseProduccion/>
            <br />
            <br />
                <Turnos/>
            <br />
            <br />
                <TotalesProduccion/>
            <br />
            <hr/>
            <br />
            <Row>
                <ObservacionesMantenimiento />
                <Agregados />            
            </Row>
            <br />
                <br />
                <br />
                <div className="d-grid gap-2" id="buttons-end">
                    <Button variant="primary" size="lg">
                        Guardar parcialmente
                    </Button>
                    <Button variant="success" size="lg">
                        Finalizar totalmente
                    </Button>
                </div>
            <br />
            <br />
        </div>

        </>

    );
}

export default ProduccionDiaria;