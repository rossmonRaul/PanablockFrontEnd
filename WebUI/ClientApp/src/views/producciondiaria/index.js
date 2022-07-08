import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form } from "react-bootstrap";
import width from '../../../../../node_modules/dom-helpers/cjs/width';
import { InputSelect, InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';

import logo from '../../images/logo.webp';
import { ObtenerProductos } from '../../servicios/ServicioProducto';
import { ObtenerHorarios } from '../../servicios/ServicioProduccionDiaria';

const API_HOST = "http://localhost:3000";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

const ProduccionDiaria = () => {

    const [data, setData] = useState([]);
    const [listaTurno, setListaTurno] = useState([
        "Placa F:", "Placa I:", null, "Turno #1", "Placa F:", "Placa I:", null, "Turno #2", "Placa F:", "Placa I:", null, "Turno #2", "Placa F:", "Placa I:"
    ]);
    const [placas6, setPlacas6] = useState(0);

    const onChangeplacas6 = (e) => setPlacas6(e.target.value);

    const [idProducto, setidProducto] = useState(0);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaPlacas, setListaPlacas] = useState([]);
    const [listaHorarios, setListaHorarios] = useState([]);

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


    const fetchInventory = () => {
        setData(
             [
                {
                    "id": 1,
                    "product_name": "Weetabix",
                    "product_category": "Cereal",
                    "unit_price": "501",
                },
                {
                    "id": 2,
                    "product_name": "Colgate Toothpaste",
                    "product_category": "Toiletries",
                    "unit_price": "119",
                },
                {
                    "id": 3,
                    "product_name": "Imperial Leather Soap",
                    "product_category": "Toiletries",
                    "unit_price": "235",
                },
                {
                    "id": 4,
                    "product_name": "Sunlight Detergent",
                    "product_category": "Toiletries",
                    "unit_price": "401",
                }
            ]
        );   

    }

    useEffect(() => {
        fetchInventory();
        ObtenerListadoDeProductos();
        ObtenerListadoDeHorarios();
       
    }, []);


    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
    });

    const [unitPrice, setUnitPrice] = useState(null);

    const onEdit = ({ id, currentUnitPrice }) => {
        setInEditMode({
            status: true,
            rowKey: id
        })
        setUnitPrice(currentUnitPrice);
    }

 
    const updateInventory = ({ id, newUnitPrice }) => {
        fetch(`${INVENTORY_API_URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                unit_price: newUnitPrice
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                // reset inEditMode and unit price state values
                onCancel();

                // fetch the updated data
                fetchInventory();
            })
    }

    /**
     *
     * @param id -The id of the product
     * @param newUnitPrice - The new unit price of the product
     */
    const onSave = ({ id, newUnitPrice }) => {
        updateInventory({ id, newUnitPrice });
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        setUnitPrice(null);
    }

    const onChangeidProducto = (e) => setidProducto(e.target.value);


    return (
       
        <div className="container">
            <br />
            <Row>
                <Col>
                <h1 >Producción Diaria</h1>
                </Col>
                <Col>
                    <img src={logo} className="logo" style={{ width: "18vw", height: "4vw", objectFit : "contain" }} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <InputText id='txt-peso1' label='Fecha:' type='text' placeholder='21-03-22' 
                         mensajeValidacion="El peso es requerido" disabled="disabled" />
                </Col>
                <Col>
                    <InputText id='txt-peso1' label='Planta:' type='text' placeholder='Planta X'
                         mensajeValidacion="El peso es requerido" disabled="disabled" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputText id='txt-peso1' label='Hora Inicio:' type='text' placeholder='7:50 AM'
                         mensajeValidacion="El peso es requerido" disabled="disabled" />
                </Col>
                <Col>
                    <InputText id='txt-peso1' label='Hora Paro:' type='text' placeholder='5:00 PM'
                         mensajeValidacion="El peso es requerido" disabled="disabled" />
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="col-md-6">
                    
                    <InputSelect className="form-control" controlId="sel-idProducto" label="Producto" data={listaProductos} onChange={onChangeidProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto" 
                    />
                </Col>   
            </Row>
        
            <br />
            <br />
            <h3>Desglose de producción diaria</h3>
            <br />
            <Table >
                <thead >
                    <tr style={{ backgroundColor: "#007bff", color: "white"} }>
                        <th>Hora</th>
                        <th>Placas</th>
                        <th>Turno</th>
                        <th>Placa</th>
                        <th>Conteo</th>
                        <th>Observacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        listaHorarios.map((item, index) => (
                            
                            <tr key={item.id}>
                                <td>{

                                    item.horaInicio + " - " + item.horaFinal
                                }
                                </td>
                                <td>
                                    {<Form.Control />}

                                </td>
                                <td>
                                    {listaTurno[index] }                 
                                </td>
                               
                                <td>
                                    {<Form.Control />}
                                  
                                </td>
                                
                                 <td >
                                    {<Form.Control />}
                                 </td>
                                     
                                <td>{

                                    <Form.Control value={placas6}
                                        onChange={onChangeplacas6} />
                                }
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </Table>

            <hr/>

            
            <br />
          

            <h3>Desglose de totales de producción diaria</h3>
            
            <Table striped  >
                <thead className="table-light">
                    <tr>
                        <th>Placas Totales</th>
                        <th>Unidades Totales</th>
                        <th>Cubos Totales</th>
                        <th>Merma Total</th>
                        <th>Mezclas Perdidas</th>
                        <th>Número de Mezclas</th>
                        <th>Cemento (kg)</th>

                    </tr>
                </thead>
                <tbody>


                    <tr >
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td> <Form.Control value={placas6}
                            onChange={onChangeplacas6} className="" />
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>



                    </tr>


                </tbody>
            </Table>



            <Table striped  >
                <thead >
                    <tr>

                        <th>Agregados</th>
                        <th>Agregado #1</th>
                        <th>Agregado #2</th>
                        <th>Agregado #3</th>
                        <th>Aditivo (kg)</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                                          
                    <tr >

                        <td>
                            {<Form.Label>Tipos</Form.Label>}
                            {<Form.Label>Vueltas</Form.Label>}
                        </td>
                        <td >                           
                            {
                                <Form.Control value={placas6}
                                onChange={onChangeplacas6} />
                            }  
                            {
                                <Form.Control value={placas6}
                                onChange={onChangeplacas6}  />
                            } 
                        </td>
                        <td >
                            {
                                <Form.Control value={placas6}
                                    onChange={onChangeplacas6} />
                            }
                            {
                                <Form.Control value={placas6}
                                    onChange={onChangeplacas6} />
                            }
                        </td>
                        <td >
                            {
                                <Form.Control value={placas6}
                                    onChange={onChangeplacas6} />
                            }
                            {
                                <Form.Control value={placas6}
                                    onChange={onChangeplacas6} />
                            }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        <td>{

                            <Form.Control value={listaPlacas}
                                onChange={onChangeplacas6} />
                        }
                        </td>
                        
                    </tr>
                       
                    
                </tbody>
            </Table>

  
            <hr/>
            <br/>
            <h3>Observaciones de Mantenimiento</h3>
            <Table striped  >
                <tbody>


                    <tr >
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación' 
                                 mensajeValidacion="La observación es requerida" />

                        }
                        </td>
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación' 
                                 mensajeValidacion="La observación es requerida" />
                        }
                        </td>
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación' 
                                 mensajeValidacion="La observación es requerida" />
                        }
                        </td>
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación'
                                mensajeValidacion="La observación es requerida" />
                        }
                        </td>
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación' 
                                 mensajeValidacion="La observación es requerida" />
                        }
                        </td>
                        <td> <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación' 
                                 mensajeValidacion="La observación es requerida" />
                        </td>
                        <td>{

                            <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese una observación'
                                mensajeValidacion="La observación es requerida" />
                        }
                        </td>



                    </tr>


                </tbody>
            </Table>
        </div>
    );
}

export default ProduccionDiaria;