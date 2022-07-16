import { ProcesarDatosApi } from "../api/ApiFetch";
const controladorEncabezado = "encabezadoproducciondiaria"

export const ObtenerProduccionesDiarias = async (idPlanta, fecha) => {
    const url = `${controladorEncabezado}/ObtenerProduccionDiariaPorFechaYPlanta/${idPlanta}/${fecha}`;
    return await ProcesarDatosApi('GET', url);
}