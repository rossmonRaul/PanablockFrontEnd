import { ProcesarDatosApi } from "../api/ApiFetch";
const controladorEncabezado = "encabezadoproducciondiaria"

export const ObtenerProduccionesDiarias = async (idPlanta, fecha) => {
    const url = `${controladorEncabezado}/ObtenerEncabezadoProduccionDiaria?idPlanta=${idPlanta}&Fecha=${fecha}`;
    return await ProcesarDatosApi('GET', url);
}