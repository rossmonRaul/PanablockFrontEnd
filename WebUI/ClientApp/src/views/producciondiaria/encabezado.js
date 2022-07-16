import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { InputSelect, InputText } from '../../components/inputs';
import logo from '../../images/logo.webp';
import brick from '../../images/brick.png';
import '../../styles/producciondiaria.css';

import { ObtenerProductos } from '../../servicios/ServicioProducto';


const Encabezado = () => {


    const [idPlanta, setidPlanta] = useState(0);
    const [horaInicio, sethoraInicio] = useState("");
    const [horaFinal, sethoraFinal] = useState(""); 

    const [idProducto, setidProducto] = useState(0);
    const [listaProductos, setListaProductos] = useState([]);
    const [fechaActual, setFechaActual] = useState("");

    const ObtenerListadoDeProductos = async () => {
        const productos = await ObtenerProductos();
        if (productos !== undefined) {
            setListaProductos(productos);
            setidProducto(productos[0].idProducto);
        }
    }

    const ObtenerFechaActual = () => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        //validar si ya hay un encabezado de produccion ese día sin terminar

        setFechaActual(date);
    }

    const ObtenerIdPlanta = () => {
        let usuario = JSON.parse(sessionStorage.getItem("data_usuario"));
        setidPlanta(usuario.nombrePlanta);
    }



    useEffect(() => {
        ObtenerListadoDeProductos();
        ObtenerFechaActual();
        ObtenerIdPlanta();
    }, []);

    const onChangeHoraInicio = (e) => sethoraInicio(e.target.value);
    const onChangeHoraFinal = (e) => sethoraFinal(e.target.value);
    const onChangeIdProducto = (e) => setidProducto(e.target.value);


    return (
       <>
            <Row >
                <Col className="title-col" >
                    <h1 className="title-producciondiaria" >Producción Diaria</h1>
                </Col>
                <Col>
                    <img src={logo} className="logo-encabezado"  />
                </Col>
            </Row>
            
            <hr />
            <br />
            <div className="encabezado-container">
            <Row>   
                <Col>
                        <InputText id='txt-planta' label='Planta:' type='text' placeholder={idPlanta }
                          disabled="disabled" />
                    </Col>
                    <Col>

                    </Col>
            </Row>
                <Row>
                    <Col>
                        <InputText id='txt-fecha' label='Fecha:' type='text' value={fechaActual}
                            disabled="disabled" />
                    </Col>
                <Col>
                        <InputText id='txt-horaInicio' label='Hora Inicial:' type='time' placeholder='Digite la fecha de inicio'
                            value={horaInicio} onChange={onChangeHoraInicio}   />
                </Col>
                <Col>
                        <InputText id='txt-horaParo' label='Hora Paro:' type='time' placeholder='Digite la fecha final' value={horaFinal}
                            onChange={onChangeHoraFinal } />
                </Col>
                  
                </Row>

            </div>


            <hr/>
            <div className="producto-container">  
                <div>
                    <div className="producto-left" >
                        <InputSelect className="form-control" controlId="sel-idProducto" label="Producto" data={listaProductos} onChange={onChangeIdProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto"
                        />
                    </div>
                    <div className="producto-right">
                        <img src={brick}  className="producto-icon" />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Encabezado;