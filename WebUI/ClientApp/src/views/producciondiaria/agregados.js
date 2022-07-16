import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';



const Agregados = () => { 

    const [nuevoElementoTipos, setnuevoElementoTipos] = useState("");
    const [nuevoElementoVueltas, setnuevoElementoVueltas] = useState(0);
    const [listaAgregados, setListaAgregados] = useState([]);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
     
    }, []);

    const ObtenerListaAgregados = () => {
        /* obtener si hay agregados a este encabezado para precargarlos*/
    }

    const onClickAgregarAgregado = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            let agregado =
            {
                tipo: nuevoElementoTipos,
                vuelta: nuevoElementoVueltas
            };
            setListaAgregados(listaAgregados => [...listaAgregados, agregado]);
           
        }
        setValidated(true);
        e.preventDefault();
    }

    const onChangeNuevoElementoTipos = (e) => setnuevoElementoTipos(e.target.value);
    const onChangeNuevoElementoVueltas = (e) => setnuevoElementoVueltas(e.target.value);


    return (

        <>

            <Col id="agregados-container" className="col-md-5 offset-1">
                <h3 className="agregados-title">Agregados</h3>
                <br />
                <hr />
                <Form noValidate validated={validated} onSubmit={onClickAgregarAgregado} >
                    <Row>
                        <Col>
                            <InputText id='txt-agregado' type='text' placeholder='Ingrese un agregado' value={nuevoElementoTipos}
                                onChange={onChangeNuevoElementoTipos} label="Agregado:" mensajeValidacion="Ingrese un tipo"/>
                            
                        </Col>
                        <Col className="col-md-6">                           
                            <InputText id='txt-vueltas' type='number' placeholder='Ingrese las vueltas' value={nuevoElementoVueltas}
                                onChange={onChangeNuevoElementoVueltas} label="Vueltas:" mensajeValidacion="Ingrese las vueltas"/>
                        </Col>                      
                    </Row>
                    <Button variant="primary" type="submit" size="md" className="btn-agregados">Agregar <img src={add} /> </Button>
                </Form>
                <br />
                <br />
                <hr />

                { listaAgregados.length > 0 ?

                    <Table >
                        <thead className="tabla-header">
                            <tr>
                                <th className="tabla-header-top"># Agregado</th>
                                <th>Tipos</th>
                                <th className="tabla-header-bottom">Vueltas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                listaAgregados.map((item, index) => (

                                    <tr>
                                        <td className="tabla-horarios">#{
                                            index + 1
                                        }
                                        </td>
                                        <td>
                                            {item.tipo}
                                        </td>
                                        <td>
                                            {item.vuelta}
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

export default Agregados; 