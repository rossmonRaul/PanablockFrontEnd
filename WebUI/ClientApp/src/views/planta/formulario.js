import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { InputText } from '../../components/inputs'

const Formulario = ({ labelButton, data, proceso, onClickProcesarPlanta, mensaje }) => {
    const [nombrePlanta, setNombrePlanta] = useState(proceso == 2 ? data.nombrePlanta : '');
    const [ubicacion, setUbicacion] = useState(proceso == 2 ? data.ubicacion : '');

    const onClickAceptar = () => {
        const data = {
            nombrePlanta: nombrePlanta,
            ubicacion: ubicacion
        }
        onClickProcesarPlanta(data);
    }
    
    const onChangeNombrePlanta = (e) => setNombrePlanta(e.target.value);
    const onChangeUbicacion = (e) => setUbicacion(e.target.value);

    return(
        <>
            <Form>                
                <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={nombrePlanta} 
                    text='Nombre de la planta.' onChange={onChangeNombrePlanta}/>
                <InputText id='txt-ubicacion' label='Ubicación:' type='text' placeholder='Ingrese la ubicación' value={ubicacion} 
                    text='Ubicación de la planta.' onChange={onChangeUbicacion}/>  
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
            </Form>
            <div className='text-right'>
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickAceptar()}>{labelButton}</Button>
            </div>   
        </>
    )
}

export default Formulario