import { postApi } from "../api/ApiFetch"
const controlador = "planta";

export const AgregarPlanta = async (dato) => {
    console.log(dato)
    const url = `${controlador}/agregarplanta`;
   /* const respuesta = await postApi(url, dato);

    return respuesta;*/
}