import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import { ObtenerPlantas, ObtenerRoles, ObtenerTiposIdentificacion } from '../../servicios/ServicioUsuarios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Formulario = ({ labelButton, data, proceso, onClickProcesarUsuario, mensaje }) => {
    const [listaPlantas, setListaPlantas] = useState([]);
    const [listaTiposIdentificacion, setListaTiposIdentificacion] = useState([]);
    const [listaRoles, setListaRoles] = useState([]);

    //campos de form
    const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [contrasenaTemporal, setContrasenaTemporal] = useState(proceso == 2 ? data.contrasenaTemporal : '');
    const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre : '');
    const [primerApellido, setPrimerApellido] = useState(proceso == 2 ? data.primerApellido : '');
    const [segundoApellido, setSegundoApellido] = useState(proceso == 2 ? data.segundoApellido : '');
    const [fechaNacimiento, setfechaNacimiento] = useState(proceso == 2 ? data.fechaNacimiento : '');
    const [direccion, setDireccion] = useState(proceso == 2 ? data.identificacion : '');
    const [telefono, setTelefono] = useState(proceso == 2 ? data.identificacion : '');

    //variables de combo box
    const [idPlanta, setIdPlanta] = useState(0);
    const [idRol, setIdRol] = useState(0);
    const [idTiposIdentificacion, setidTiposIdentificacion] = useState(0);

    const [validated, setValidated] = useState(false);
    
    useEffect(() => {
        ObtenerListadoDePlantas();
        ObtenerListadoDeTiposID();
        ObtenerListadoDeRoles();
    }, []);

     //llenado de combo box

    const ObtenerListadoDePlantas = async() => {
        const plantas = await ObtenerPlantas();
        if(plantas !== undefined){
            setListaPlantas(plantas);
            setIdPlanta(plantas[0].idPlanta);
        }
    }

    const ObtenerListadoDeRoles = async () => {
        const roles = await ObtenerRoles();
        if (roles !== undefined) {
            setListaRoles(roles);
            setIdRol(roles[0].idRol);
        }
    }

    const ObtenerListadoDeTiposID = async () => {
        const tiposIdentificacion = await ObtenerTiposIdentificacion();
        if (tiposIdentificacion !== undefined) {
            setListaTiposIdentificacion(tiposIdentificacion);
            setidTiposIdentificacion(tiposIdentificacion[0].IdTipoIdentificacion);
        }
    }

    //envio de datos

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
        }else{
            const data = {
                idPlanta: idPlanta,
                coreoElectronico: correo,
                contrasenaTemporal: contrasenaTemporal,               
                idRol: idRol,
                IdTipoIdentificacion : idTiposIdentificacion,
                identificacion: identificacion,
                nombre: nombre,
                primerApellido: primerApellido,
                segundoApellido: segundoApellido,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                telefono: telefono

            }
            onClickProcesarUsuario(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form
    const onChangePlanta = (id) => {
        setIdPlanta(id);
    }

    const onChangeRol = (id) => {
        setIdRol(id);
    }

    const onChangeTiposIdentificacion = (id) => {
        setidTiposIdentificacion(id);
    }
    
    const onChangeCorreo = (e) => setCorreo(e.target.value);
    const onChangeContrasenha = (e) => setContrasenaTemporal(e.target.value);
    const onChangeIdentificacion = (e) => setIdentificacion(e.target.value);
    const onChangeNombre = (e) => setNombre(e.target.value);
    const onChangePrimerApellido = (e) => setPrimerApellido(e.target.value);
    const onChangeSegundoApellido = (e) => setSegundoApellido(e.target.value);
    const onChangeFechaNacimiento = (e) => setfechaNacimiento(e.target.value);
    const onChangeDireccion = (e) => setDireccion(e.target.value);
    const onChangeTelefono = (e) => setTelefono(e.target.value);

    return(
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>       
                <Row>
                    <Col lg="4">
                        <InputSelect className="form-control" controlId="sel-tipoIdentificacion" label="Tipo de Identificación" data={listaTiposIdentificacion} onChange={onChangeTiposIdentificacion} value={idTiposIdentificacion} optionValue="idTipoIdentificacion" optionLabel="descripcion"/>
                        <br />
                        <InputText id='txt-identificacion' label='Identificación:' type='text' placeholder='Ingrese la identificación' value={correo} 
                            text='Identificación.' onChange={onChangeCorreo} mensajeValidacion="La identificación es requerida" size="lg"/>
                        <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='Ingrese la contraseña' value={contrasenaTemporal}
                           text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida" />  
                        <InputText id='txt-correo' label='Correo eléctronico:' type='email' placeholder='Ingrese el correo' value={correo}
                          text='Correo eléctronico.' onChange={onChangeCorreo} mensajeValidacion="El correo es requerido" />            
                    </Col>
                    <Col>
                        <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={correo}
                            text='Nombre.' onChange={onChangeCorreo} mensajeValidacion="El nombre es requerido" />
                        <InputText id='txt-primerApellido' label='Primer Apellido:' type='text' placeholder='Ingrese el primer apellido' value={correo} 
                          text='Primer Apellido.' onChange={onChangeCorreo} mensajeValidacion="El campo es requerido"/>

                        <InputText id='txt-segundoApellido' label='Segundo Apellido:' type='text' placeholder='Ingrese el segundo apellido' value={correo} 
                            text='Segundo Apellido.' onChange={onChangeCorreo} mensajeValidacion="El campo es requerido"/>

                        <InputText id='txt-correo' label='Dirección:' type='email' placeholder='Ingrese la dirección' value={correo} 
                                    text='Correo eléctronico.' onChange={onChangeCorreo} mensajeValidacion="El correo es requerido" />
                    </Col>
                    <Col>
                       

                        <InputText id='txt-contrasenha' label='Fecha de Nacimiento:' type='date' placeholder='Ingrese la fehca de nacimiento' value={contrasenaTemporal}
                            text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida" />  
                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <InputText id='txt-contrasenha' label='Teléfono:' type='tel' placeholder='Ingrese el teléfono' value={contrasenaTemporal}
                            text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida"  />  
                         </OverlayTrigger>
                        <InputSelect className="form-control" controlId="sel-rol" label="Rol" data={listaPlantas} onChange={onChangePlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta" />
                        <br/>
                        <InputSelect className="form-control" controlId="sel-rol" label="Rol" data={listaRoles} onChange={onChangeRol} value={idRol} optionValue="idRol" optionLabel="descripcion"/>
                        <br />
                                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                    </Col>
                      
                </Row>
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>

            </Form>
        </>
    )
}

export default Formulario;