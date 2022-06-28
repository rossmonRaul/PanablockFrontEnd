import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import { ObtenerPlantas } from '../../servicios/ServicioPlanta';

const Formulario = ({ labelButton, data, proceso, onClickProcesarUsuario, mensaje }) => {
    const [listaPlantas, setListaPlantas] = useState([]);
    const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [contrasenaTemporal, setContrasenaTemporal] = useState(proceso == 2 ? data.contrasenaTemporal : '');
    const [validated, setValidated] = useState(false);
    const [idPlanta, setIdPlanta] = useState(0);

    useEffect(() => {
        ObtenerListadoDePlantas();
    }, []);

    const ObtenerListadoDePlantas = async() => {
        const plantas = await ObtenerPlantas();
        if(plantas !== undefined){
            setListaPlantas(plantas);
            setIdPlanta(plantas[0].idPlanta);
        }
     }

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
                idPersona: 3,
                idRol: 1
            }
            onClickProcesarUsuario(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangePlanta = (id) => {
        setIdPlanta(id);
    }
    
    const onChangeCorreo = (e) => setCorreo(e.target.value);
    const onChangeContrasenha = (e) => setContrasenaTemporal(e.target.value);

    return(
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>       
                <InputSelect className="form-control" controlId="sel-tipoIdentificacion" label="Identificación" data={listaPlantas} onChange={onChangePlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta"/>
                <br />
                <InputText id='txt-identificacion' label='Identificación:' type='text' placeholder='Ingrese la identificación' value={correo} 
                    text='Identificación.' onChange={onChangeCorreo} mensajeValidacion="La identificación es requerida"/>

                <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={correo} 
                    text='Nombre.' onChange={onChangeCorreo} mensajeValidacion="El nombre es requerido"/>

                <InputText id='txt-primerApellido' label='Primer Apellido:' type='text' placeholder='Ingrese el primer apellido' value={correo} 
                    text='Primer Apellido.' onChange={onChangeCorreo} mensajeValidacion="El campo es requerido"/>

                <InputText id='txt-segundoApellido' label='Segundo Apellido:' type='text' placeholder='Ingrese el segundo apellido' value={correo} 
                    text='Segundo Apellido.' onChange={onChangeCorreo} mensajeValidacion="El campo es requerido"/>

                <InputText id='txt-correo' label='Correo eléctronico:' type='email' placeholder='Ingrese el correo' value={correo} 
                    text='Correo eléctronico.' onChange={onChangeCorreo} mensajeValidacion="El correo es requerido"/>
                <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='Ingrese la contraseña' value={contrasenaTemporal} 
                    text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida"/>  

                <InputSelect className="form-control" controlId="sel-rol" label="Rol" data={listaPlantas} onChange={onChangePlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta"/>
                <InputSelect className="form-control" controlId="sel-planta" label="Planta" data={listaPlantas} onChange={onChangePlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta"/>
                <br />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>  
            </Form>
        </>
    )
}

export default Formulario;