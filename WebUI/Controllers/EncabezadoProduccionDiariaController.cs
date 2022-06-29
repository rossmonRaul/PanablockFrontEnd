using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.EncabezadoProduccionDiaria;
using Dominio.Interfaces.Aplicacion.Planta;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Controllers
{

    [Route("{controller}")]
    [ApiController]

    public class EncabezadoProduccionDiariaController : Controller
    {

        private readonly IServicioEncabezadoProduccionDiaria servicioEncabezadoProduccion;

        public EncabezadoProduccionDiariaController(IServicioEncabezadoProduccionDiaria servicioEncabezadoProduccion)
        {
            this.servicioEncabezadoProduccion = servicioEncabezadoProduccion;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> IInsertarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion)
        {
            return Json(await this.servicioEncabezadoProduccion.InsertarEncabezadoProduccionDiaria(entitiEncabezadoProduccion));
        }

        

        [HttpGet("[action]/{idPlanta}/{Fecha}")]
        public async Task<JsonResult> ObtenerEncabezadoProduccionDiaria(int idPlanta, DateTime? Fecha)
        {
            try
            {
                return Json(await this.servicioEncabezadoProduccion.ObtenerEncabezadoProduccionDiaria(idPlanta,Fecha));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }

    }
}
