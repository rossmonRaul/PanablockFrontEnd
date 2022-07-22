import React, { useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';



const AgregadosReporte = ({ listaAgregados }) => {

    return (

        <>

            <Col id="agregados-container" className="col-md-5 offset-1">
                <h3 className="agregados-title">Materiales</h3>
                <hr />

                {listaAgregados.length > 0 ?

                    <Table >
                        <thead className="tabla-header">
                            <tr>
                                <th className="tabla-header-top"># Material</th>
                                <th>Material</th>
                                <th className="tabla-header-bottom">Vueltas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaAgregados.map((item, index) => (
                                    <tr key={index}>
                                        <td className="tabla-horarios">#{
                                            index + 1
                                        }
                                        </td>
                                        <td>
                                            {item.tipoAgregado}
                                        </td>
                                        <td>
                                            {item.vueltas}
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                    :
                    <p>No hay datos disponibles</p>
                }
            </Col>
        </>
    );
}

export default AgregadosReporte;