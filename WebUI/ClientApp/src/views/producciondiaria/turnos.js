import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import turno from '../../images/change-management.png';
import '../../styles/producciondiaria.css';


const Turnos = ({ listaTurnos}) => { //lista con los datos de turnos

    const [placaInicioTurno1, setPlacaInicioTurno1] = useState(0);
    const [placaFinalTurno1, setPlacaFinalTurno1] = useState(0);
    const [placaInicioTurno2, setPlacaInicioTurno2] = useState(0);
    const [placaFinalTurno2, setPlacaFinalTurno2] = useState(0);
    const [conteoUno, setconteoUno] = useState(0);
    const [conteoDos, setconteoDos] = useState(placaFinalTurno2 - placaInicioTurno2);



    useEffect(() => {

    }, []);

    const onChangePlacaInicioTurno1 = (e) => setPlacaInicioTurno1(e.target.value);
    const onChangePlacaFinalTurno1 = (e) => setPlacaFinalTurno1(e.target.value);
    const onChangePlacaInicioTurno2 = (e) => setPlacaInicioTurno2(e.target.value);
    const onChangePlacaFinalTurno2 = (e) => setPlacaFinalTurno2(e.target.value);
    const onChangeconteoUno = (e) => setconteoUno(placaFinalTurno1 - placaInicioTurno1);
    const onChangeconteoDos= (e) => setconteoDos(placaFinalTurno2 - placaInicioTurno2);


    return (

        <>
            <div className="section-container">
                <div>
                    <div className="turno-left" >
                        <h2>Conteo de placas por turno</h2>
                    </div>
                    <div className="turno-right">
                        <img src={turno}  />
                    </div>
                </div>
                <br />
                <Table >
                    <thead className="tabla-header" >
                        <tr>
                            <th className="tabla-header-top">Turno #1</th>
                            <th>Placa</th>
                            <th className="tabla-header-bottom">Conteo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Placa Inicio:
                            </td>

                            <td>
                                <InputText id='txt-placainicio' type='number' placeholder='Digite el número de placas'
                                    value={placaInicioTurno1} onChange={onChangePlacaInicioTurno1} />
                            </td>
                            <td rowSpan="2">
                                {<Form.Control value={placaFinalTurno1 - placaInicioTurno1}  style={{ height: "5vh" }}  disabled />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Placa Final:
                            </td>
                            <td>
                                <InputText id='txt-placafinal' type='number' placeholder='Digite el número de placas'
                                    value={placaFinalTurno1} onChange={onChangePlacaFinalTurno1} />
                            </td>
                        </tr >
                    </tbody>
                </Table>

                <Table >
                    <thead className="tabla-header" >
                        <tr>
                            <th className="tabla-header-top">Turno #2</th>
                            <th>Placa</th>
                            <th className="tabla-header-bottom">Conteo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Placa Inicio:
                            </td>

                            <td>
                                <InputText id='txt-placainicio' type='number' placeholder='Digite el número de placas'
                                    value={placaInicioTurno2} onChange={onChangePlacaInicioTurno2} />

                            </td>
                            <td rowSpan="2">
                                {<Form.Control value={placaFinalTurno2-placaInicioTurno2} style={{ height: "5vh" }}  disabled  />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Placa Final:
                            </td>
                            <td>
                                <InputText id='txt-placainicio' type='number' placeholder='Digite el número de placas'
                                    value={placaFinalTurno2} onChange={onChangePlacaFinalTurno2} />
                            </td>
                        </tr >
                    </tbody>
                </Table>

                <hr />
            </div>
        </>
    );
}

export default Turnos; 