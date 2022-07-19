import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "reporte";

export const ReporteProductos = async (fechaInicio, fechaFinal, idProducto) => {
    console.log(fechaInicio, fechaFinal, idProducto);
    const url = `${controlador}/reporteproductos?fechai=${fechaInicio}&fechaf=${fechaFinal}&idproducto=${idProducto}`;
    return await ProcesarDatosApi('GET', url);
}

export const ReporteAcumulativoMensual = async (fechaInicio, fechaFinal,) => {
    const url = `${controlador}/ReporteAcumulativoMensual?fechaI=${fechaInicio}&fechaF=${fechaFinal}`;
    return await ProcesarDatosApi('GET', url);
}