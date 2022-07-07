using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.AgregadosProduccionDiaria;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{

    [Route("{controller}")]
    [ApiController]
    public class AgregadosProduccionDiariaController : Controller
    {
        public readonly IServicioAgregadosProduccionDiaria servicioAgregadosProduccionDiaria;

        public AgregadosProduccionDiariaController(IServicioAgregadosProduccionDiaria servicioAgregadosProduccionDiaria)
        {
            this.servicioAgregadosProduccionDiaria = servicioAgregadosProduccionDiaria;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarAgregados(EntitiAgregados entitiAgregados)
        {
            return Json(await this.servicioAgregadosProduccionDiaria.InsertarAgregados(entitiAgregados));
        }

        [HttpDelete("[action]/{idAgregadoProduccionDiaria}")]
        [Authorize]
        public async Task<JsonResult> EliminarAgregados(int idAgregadoProduccionDiaria)
        {
            return Json(await this.servicioAgregadosProduccionDiaria.EliminarAgregados(idAgregadoProduccionDiaria));
        }

        [HttpGet("[action]/{idEncabezadoProduccionDiaria}")]
        [Authorize]
        public async Task<JsonResult> ObtenerAgregados(int idEncabezadoProduccionDiaria)
        {
            return Json(await this.servicioAgregadosProduccionDiaria.ObtenerAgregados(idEncabezadoProduccionDiaria));
        }

    }
}
