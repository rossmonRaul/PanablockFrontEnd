import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "horario";

export const ObtenerHorarios = async () => {
    const url = `${controlador}/ObtenerHorarios`;
    return await ProcesarDatosApi('GET', url);
}

