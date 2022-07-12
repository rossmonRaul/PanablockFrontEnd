import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputSelect, InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';

import logo from '../../images/logo.webp';
import add from '../../images/add.png';
import producciondiaria from '../../images/business-report.png';
import turnos from '../../images/change-management.png';
import totales from '../../images/checklist.png';
import brick from '../../images/brick.png';

import { ObtenerProductos } from '../../servicios/ServicioProducto';
import { ObtenerHorarios } from '../../servicios/ServicioProduccionDiaria';

const ProduccionDiaria = () => {

    const [data, setData] = useState([]);
    const [listaTurno, setListaTurno] = useState([
        "Placa Inicio:", "Placa Final:"
    ]);

    const [placas6, setPlacas6] = useState(0);


    const [idProducto, setidProducto] = useState(0);
    const [listaProductos, setListaProductos] = useState([]);

    const [listaPlacas, setListaPlacas] = useState([]);
    const [listaHorarios, setListaHorarios] = useState([]);

    const [listaObservaciones, setListaObservaciones] = useState([]);
    const [nuevoElementoObservacion, setnuevoElementoObservacion] = useState("");

    const [listaAgregados, setListaAgregados] = useState([]);
    const [nuevoElementoAgregados, setnuevoElementoAgregados] = useState("");
 
    const [fechaActual, setFechaActual] = useState("");
 

    const ObtenerListadoDeProductos = async () => {
        const productos = await ObtenerProductos();
        if (productos !== undefined) {
            setListaProductos(productos);
            setidProducto(productos[0].idProducto);
        }
    }

    const ObtenerListadoDeHorarios = async () => {
        const horarios = await ObtenerHorarios();
        if (horarios !== undefined) {
            setListaHorarios(horarios);
        }
    }

    const onClickAgregarAgregado = (e) => {
        
        setListaAgregados(listaAgregados => [...listaAgregados, nuevoElementoAgregados]);
        e.preventDefault();
        setnuevoElementoAgregados("");
    }


    const onClickAgregarObservacion= (e) => {

        setListaObservaciones(listaObservaciones => [...listaObservaciones, nuevoElementoObservacion]);
        e.preventDefault();
        setnuevoElementoObservacion("");
    }

    const ObtenerFechaActual = () => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        //validar si ya hay un encabezado de produccion ese día sin terminar

        setFechaActual(date);
    }


    useEffect(() => {
        ObtenerListadoDeProductos();
        ObtenerListadoDeHorarios();
        ObtenerFechaActual();
    }, []);



    const onChangeidProducto = (e) => setidProducto(e.target.value);
    const onChangeplacas6 = (e) => setPlacas6(e.target.value); //prueba
    const onChangeNuevoElementoObservacion = (e) => setnuevoElementoObservacion(e.target.value);
    const onChangeNuevoElementoAgregados= (e) => setnuevoElementoAgregados(e.target.value);

    return (
       <>
        <div className="container">
            <br />
            <br />
            <Row >
                <Col style={{ borderLeft: "5px solid #007BFF", marginLeft: "2vw", height : "6vh"}}  >
                <h1 style={{ color: "#38454C", fontWeight: "700" }} >Producción Diaria</h1>
                </Col>
                <Col>
                    <img src={logo} className="logo" style={{ width: "30vw", height: "4vw", objectFit : "contain" }} />
                </Col>
            </Row>
            
            <hr />
            <br />
            <div style={{ padding: "3%", borderRadius: "15px", backgroundColor: "#fff" }}>
            <Row>
                <Col>
                        <InputText id='txt-fecha' label='Fecha:' type='text' value={fechaActual }
                          disabled="disabled" />
                </Col>
                <Col>
                    <InputText id='txt-planta' label='Planta:' type='text' placeholder='Planta X'
                          disabled="disabled" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputText id='txt-horaInicio' label='Hora Inicio:' type='text' placeholder='7:50 AM'
                         />
                </Col>
                <Col>
                    <InputText id='txt-horaParo' label='Hora Paro:' type='text' placeholder='5:00 PM'
                          />
                </Col>
                </Row>

            </div>


            <hr/>
            <div style={{ padding: "3%", borderRadius: "15px", backgroundColor: "#007BFF" }}>  
                <div>
                    <div style={{ display: "inline-block", color: "white", fontWeight: "600", fontSize:"1.5vw"}} >
                        <InputSelect className="form-control" controlId="sel-idProducto" label="Producto" data={listaProductos} onChange={onChangeidProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto"
                        />
                    </div>
                    <div style={{ display: "inline-block", float: "right" }}>
                        <img src={brick} style={{ width: "6vw", height: "5vw", objectFit: "contain", borderRadius: "50%"}} />
                    </div>
                </div>
            </div>

            <br />

            <div style={{ padding: "3%", borderRadius: "15px", backgroundColor: "white" }}>
                <div>
                    <div style={{ display: "inline-block"}} >
                        <h2 style={{ color: "#38454C", fontWeight: "600", lineHeight: "9vh" }}>Desglose de Producción Diaria</h2>
                    </div>
                    <div style={{ display: "inline-block", float: "right"}}> 
                        <img src={producciondiaria} style={{ width: "5.5vw", height: "5vw", objectFit: "contain", borderRadius: "50%", backgroundColor: "#EEE", padding: "10%"}} />
                    </div>
                </div>
            <br />
            <Table >
                <thead style={{ backgroundColor: "#007bff", color: "white" }}> 
                  <tr>
                        <th style={{ borderRadius: "15px 0px 0px 15px"}}>Hora</th>
                        <th>Placas</th>  
                        <th style={{ borderRadius: "0px 15px 15px 0px" }}>Observacion</th>
                    </tr>
                </thead>                
                <tbody>
                    {
                        
                        listaHorarios.map((item, index) => (
                            
                            <tr key={item.id}>
                                <td style={{ color: "#38454C", fontWeight: "500" }}>{

                                    item.horaInicio + " - " + item.horaFinal
                                }
                                </td>
                                <td>
                                    {<Form.Control />}
                                </td>                                                         
                                <td>
                                    {<Form.Control />}
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </Table>
            <hr/>           
            </div>
            <br />
            <br />
            <div style={{ padding: "3%", borderRadius: "15px", backgroundColor: "white" }}>
                <div>
                    <div style={{ display: "inline-block" }} >
                        <h2 style={{ color: "#38454C", fontWeight: "600", lineHeight: "9vh" }}>Desglose de Turnos</h2>
                    </div>
                    <div style={{ display: "inline-block", float: "right" }}>
                        <img src={turnos} style={{ width: "5.5vw", height: "5vw", objectFit: "contain", borderRadius: "50%", backgroundColor: "#EEE", padding: "15%" }} />
                    </div>
                </div>
            <br />
            <Table >
                <thead >
                    <tr style={{ backgroundColor: "#007bff", color: "white" }}>                      
                        <th style={{ borderRadius: "15px 0px 0px 15px" }}>Turno #1</th>
                        <th>Placa</th>
                        <th style={{ borderRadius: "0px 15px 15px 0px" }}>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Placa Inicio:
                        </td>

                        <td>
                            {<Form.Control />}

                        </td>
                        <td rowSpan="2">
                            {<Form.Control style={{height : "10vh"} }/>}
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            Placa Final:
                        </td>
                        <td>
                            {<Form.Control />}
                        </td>                       
                   </tr >
                </tbody>
            </Table>

            <Table >
                <thead >
                    <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                        <th style={{ borderRadius: "15px 0px 0px 15px" }}>Turno #2</th>
                        <th>Placa</th>
                        <th style={{ borderRadius: "0px 15px 15px 0px" }}>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Placa Inicio:
                        </td>

                        <td>
                            {<Form.Control />}

                        </td>
                        <td rowSpan="2">
                            {<Form.Control style={{ height: "10vh" }} />}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Placa Final:
                        </td>
                        <td>
                            {<Form.Control />}
                        </td>
                    </tr >
                </tbody>
            </Table>

            <hr />         
            </div>

            <br />
            <br />
            <div style={{ padding: "3%", borderRadius: "15px", backgroundColor: "white" }}>
                <div>
                    <div style={{ display: "inline-block" }} >
                        <h2 style={{ color: "#38454C", fontWeight: "600", lineHeight: "9vh" }}>Desglose de Totales de Producción Diaria</h2>
                    </div>
                    <div style={{ display: "inline-block", float: "right" }}>
                        <img src={totales} style={{ width: "5.5vw", height: "5vw", objectFit: "contain", borderRadius: "50%", backgroundColor: "#EEE", padding: "15%" }} />
                    </div>
                </div>
            <br/>
            <Table >
                <thead >
                    <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                        <th style={{ borderRadius: "15px 0px 0px 15px" }}>Placas Totales</th>
                        <th>Unidades Totales</th>
                        <th>Cubos Totales</th>
                        <th>Merma Total</th>
                        <th>Mezclas Perdidas</th>
                        <th>Número de Mezclas</th>
                        <th>Cemento (kg)</th>
                        <th>Aditivo (kg)</th>
                        <th style={{ borderRadius: "0px 15px 15px 0px"}}>Color</th>
                    </tr>
                </thead>
               
                <tbody>


                        <tr  >
                        <td>{

                            <Form.Control  />
                        }
                        </td>
                        <td>{

                            <Form.Control  />
                        }
                        </td>
                        <td>{

                            <Form.Control  />
                        }
                        </td>
                        <td>{

                            <Form.Control  />
                        }
                        </td>
                        <td>{

                            <Form.Control />
                        }
                        </td>
                        <td> <Form.Control />
                        </td>
                        <td>{

                            <Form.Control />
                        }
                        </td>
                        <td>{

                            <Form.Control />
                        }
                        </td>
                        <td>{

                            <Form.Control />
                        }
                        </td>


                    </tr>


                </tbody>
            </Table>
            </div>
            <br />
            <hr/>
            <br />

            <Row>

            <Col style={{ padding: "3%", borderRadius: "15px", backgroundColor: "white" }}>
                    <h3 style={{ color: "#38454C", fontWeight: "600", borderLeft: "5px solid #007BFF", height: "5vh", paddingLeft: "1vw" }}>Observaciones de Mantenimiento</h3>
                <br />
                <hr/>
                    <Form onSubmit={onClickAgregarObservacion} >
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
                <br/>
                    <ListGroup variant="flush">
                        {
                            listaObservaciones.map((item) =>(
                                <ListGroup.Item>{item}</ListGroup.Item>
                            ))   
                        }
                    </ListGroup>
            </Col>
            
                <Col style={{ padding: "3%", borderRadius: "15px", backgroundColor: "white" }} className="col-md-5 offset-1">
                    <h3 style={{ color: "#38454C", fontWeight: "600", borderLeft: "5px solid #007BFF", height: "5vh", paddingLeft: "1vw" }}>Agregados</h3>
                    <br />
                    <hr />
                    <Form onSubmit={onClickAgregarAgregado} >
                        <Row>
                            <Col>
                                <InputText id='txt-nombre' type='text' placeholder='Ingrese un agregado' value={nuevoElementoAgregados}
                                    onChange={onChangeNuevoElementoAgregados} />
                            </Col>
                            <Col className="col-md-4">
                                <br />
                                <Button variant="primary" type="submit" size="md">Agregar <img src={add} /> </Button>
                               
                            </Col>
                        </Row>
                    </Form>
                    <br />
                    <ListGroup variant="flush" >
                        {
                            listaAgregados.map((item, index) => (
                                <ListGroup.Item >#{index + 1} | {item}</ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
            <br />
        </div>


            <style type="text/css">
                {`
                    .table thead th{     
                        border-bottom: none;
                        border-top: none;
                    }

                    
                `}
            </style>

        </>

    );
}

export default ProduccionDiaria;