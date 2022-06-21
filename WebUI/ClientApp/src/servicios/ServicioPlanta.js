import { ProcesarDatosApi, ObtenerDatosApi } from "../api/ApiFetch";
const controlador = "planta";

const ValidarDatosVacios = (data) => {
    if(data.nombrePlanta == '' || data.ubicacion == '')
        return false;
    return true;
}

export const AgregarPlanta = async (data) => {
    if(!ValidarDatosVacios(data))
        return {indicador: 1, mensaje: 'El formulario contiene datos vacios!'};

    const url = `${controlador}/insertarplanta`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarPlanta = async (data) => {
    if(!ValidarDatosVacios(data))
        return {indicador: 1, mensaje: 'El formulario contiene datos vacios!'};
    const url = `${controlador}/actualizarplanta`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarPlanta = async (id) => {
    const url = `${controlador}/eliminarplanta?idPlanta=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerPlantas = async() => {
    const url = `${controlador}/ObtenerPlantas`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPlantaPorId = async(id) => {
    const url = `${controlador}/ObtenerDetallePlantaID/${id}`;
    return await ProcesarDatosApi('GET', url);
}