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
            <div className="btn-section">  
                <Button variant="primary" type="submit" size="md">Guardar </Button>
                <Button variant="success" type="submit" size="md">Finalizar </Button>
                </div>    
            <br />
            <br />
        </div>

        </>

    );
}

export default ProduccionDiaria;