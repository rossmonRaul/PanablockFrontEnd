import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';
import producciondiaria from '../../images/business-report.png';
import '../../styles/producciondiaria.css';
import { ObtenerHorarios } from '../../servicios/ServicioProduccionDiaria';

const DesgloseProduccion = ({ listaProduccion }) => { //lista con los datos de placas y observaciones

    const [listaHorarios, setListaHorarios] = useState([]);

    const ObtenerListadoDeHorarios = async () => {
        const horarios = await ObtenerHorarios();
        if (horarios !== undefined) {
            setListaHorarios(horarios);
        }
    }


    useEffect(() => {
        ObtenerListadoDeHorarios();
    }, []);


    return (

    <>
    <div className="section-container">
        <div>
            <div className="produccion-left" >
                <h2>Desglose de Producción Diaria</h2>
            </div>
            <div className="produccion-right">
                <img src={producciondiaria} />
            </div>
        </div>
        <br />
        <Table responsive >
            <thead className="tabla-header">
                <tr>
                    <th className="tabla-header-top">Hora</th>
                    <th>Placas</th>
                    <th className="tabla-header-bottom">Observacion</th>
                </tr>
            </thead>
            <tbody>
                {

                    listaHorarios.map((item, index) => (

                        <tr key={item.id}>
                            <td className="tabla-horarios">{

                                item.horaInicio + " - " + item.horaFinal
                            }
                            </td>
                            <td>
                                <InputText type='text' placeholder='Digite el número de placas'/>
                            </td>
                            <td>
                                {<TextArea  placeholder='Digite una observación'/>}
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </Table>
        <hr />
    </div>

    </>

    );
}

export default DesgloseProduccion;