import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { InputText } from '../../components/inputs'
import { TextArea } from '../../components/textarea';
import { ComboBox } from '../../components/combobox';

const Formulario = ({ labelButton, data, proceso, onClickProcesarActividadPlanta, mensaje }) => {
    const [Observacion, setObservacion] = useState(proceso == 2 ? data.observacion  : '');
    const [idPlanta, setidPlanta] = useState(proceso == 2 ? data.idPlanta : '');
    const [Plantas, setPlantas] = useState( data );
    const [validated, setValidated] = useState(false);

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || idPlanta == "") {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                observacion: Observacion,
                idPlanta: idPlanta
            }
            onClickProcesarActividadPlanta(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeObservacion = (e) => setObservacion(e.target.value);
    const onChangeidPlanta = (e) => setidPlanta(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese la observación' value={Observacion}
                    text='Observación.' onChange={onChangeObservacion} mensajeValidacion="La observación es requerida" />
                
                <ComboBox id='cbx-idplanta' label='Id Planta:' type='text' data={Plantas} value={idPlanta }
                    text='Datos de planta.' onChange={onChangeidPlanta} mensajeValidacion="La planta es requerida" indicacion="Elija una planta" />

                {Observacion}
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>
        </>
    )
}

export default Formulario