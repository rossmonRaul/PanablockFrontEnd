import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { InputText } from '../../components/inputs'

const Formulario = ({ labelButton, data, proceso, onClickProcesarTipoMaterial, mensaje }) => {
    const [nombre, setnombre] = useState(proceso == 2 ? data.nombre : '');
    const [descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');
    //const [estado, setEstado] = useState(proceso == 2 ? data.estado : '');
    const [unidadMedida, setUnidadMedida] = useState(proceso == 2 ? data.unidadMedida : '');
    const [validated, setValidated] = useState(false);

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                nombre: nombre,
                descripcion: descripcion,
                //estado: estado,
                unidadMedida : unidadMedida
            }
            onClickProcesarTipoMaterial(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeNombreTipoMaterial = (e) => setnombre(e.target.value);
    const onChangeDescripcion = (e) => setDescripcion(e.target.value);
    //const onChangeEstado = (e) => setEstado(e.target.value);
    const onChangeUnidadMedida = (e) => setUnidadMedida(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre del Tipo de Material' value={nombre}
                    text='Nombre del Tipo de Material.' onChange={onChangeNombreTipoMaterial} mensajeValidacion="El nombre es requerido" />

                <InputText id='txt-descripcion' label='Descripción:' type='text' placeholder='Ingrese la descripción del Tipo de Material' value={descripcion}
                    text='Descripción Tipo de Material.' onChange={onChangeDescripcion} mensajeValidacion="La descripción es requerida" />


                <InputText id='txt-unidadmedida' label='Unidad de Medida:' type='text' placeholder='Ingrese la unidad de medida' value={unidadMedida}
                    text='Unidad de medida del Tipo de Material.' onChange={onChangeUnidadMedida} mensajeValidacion="La unidad de medida es requerida" />

                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}


                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>

        </>
    )
}

export default Formulario