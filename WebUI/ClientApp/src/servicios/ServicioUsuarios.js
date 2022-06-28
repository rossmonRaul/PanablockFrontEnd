import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "usuario";

export const AgregarUsuario = async (data) => {
    const url = `${controlador}/insertarusuario`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarUsuario = async (data) => {
    const url = `${controlador}/actualizarusuario`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarUsuario = async (id) => {
    const url = `${controlador}/eliminarusuario?idUsuario=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerUsuarios = async() => {
    const url = `${controlador}/ObtenerUsuarios`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerUsuarioPorId = async(id) => {
    const url = `${controlador}/ObtenerDetalleUsuarioId/${id}`;
    return await ProcesarDatosApi('GET', url);
}

