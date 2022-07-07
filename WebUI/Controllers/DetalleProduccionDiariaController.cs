using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.DetalleProduccionDiaria;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class DetalleProduccionDiariaController : Controller
    {

        public readonly IServicioDetalleProduccionDiaria servicioDetalleProduccionDiaria;

        public DetalleProduccionDiariaController(IServicioDetalleProduccionDiaria servicioDetalleProduccionDiaria)
        {
            this.servicioDetalleProduccionDiaria = servicioDetalleProduccionDiaria;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarDetalleProduccionDiaria(EntitiDetalleProduccionDiaria entitiDetalleProduccionDiaria)
        {
            return Json(await this.servicioDetalleProduccionDiaria.InsertarDetalleProduccionDiaria(entitiDetalleProduccionDiaria));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarDetalleProduccionDiaria(EntitiDetalleProduccionDiaria entitiDetalleProduccionDiaria)
        {
            return Json(await this.servicioDetalleProduccionDiaria.ActualizarDetalleProduccionDiaria(entitiDetalleProduccionDiaria));
        }

        [HttpGet("[action]/{idEncabezadoProduccionDiaria}")]
        [Authorize]
        public async Task<JsonResult> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria)
        {
            return Json(await this.servicioDetalleProduccionDiaria.ObtenerDetalleProduccionDiaria(idEncabezadoProduccionDiaria));
        }
    }
}
