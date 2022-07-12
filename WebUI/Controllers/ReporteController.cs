
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Reporte;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class ReporteController : Controller
    {

        private readonly IServicioReporte servicioReporte;

        public ReporteController(IServicioReporte servicioReporte)
        {
            this.servicioReporte = servicioReporte;
        }

        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ReporteAcumulativoMensual(EntitiReporte reporte)
        {
            return Json(await this.servicioReporte.ReporteAcumulativoMensual(reporte));
        }
        [HttpGet("[action]")]
        [Authorize]
        public async Task<JsonResult> ReporteProductos(EntitiReporte reporte)
        {
            return Json(await this.servicioReporte.ReporteProductos(reporte));
        }
    }
}
