import React from 'react';
import Banner from '../../components/banner'
import Formulario from './formulario'


import { AgregarPlanta } from '../../servicios/ServicioPlanta'

const Planta = () => {
    
    const mostrarMensaje = () => {
        alert("hola mundo")
    }

    const onClickAgregarPlanta = () => {
        const data = {
            dato1: "dato1",
            dato2: "dato2"
        }
        AgregarPlanta(data)
    }
    onClickAgregarPlanta()
    return (
        <>
            <h1>index de plantas</h1>
            <Banner titulo={"Titulo 1"} texto={"texto 1"} ><Formulario mostrarMensaje={mostrarMensaje}/></Banner>
            <Banner titulo={"Titulo 2"} texto={"texto 2"}/>
            <Banner titulo={"Titulo 3"} texto={"texto 3"}/>
        </>
        )
}

export default Planta;