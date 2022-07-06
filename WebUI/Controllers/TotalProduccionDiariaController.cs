using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.TotalesProduccionDiaria;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class TotalProduccionDiariaController : Controller
    {

        public readonly IServicioTotalProduccionDiaria servicioTotalProduccionDiaria;

        public TotalProduccionDiariaController(IServicioTotalProduccionDiaria servicioTotalProduccionDiaria)
        {
            this.servicioTotalProduccionDiaria = servicioTotalProduccionDiaria;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> InsertarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            return Json(await this.servicioTotalProduccionDiaria.InsertarTotalesProduccionDiaria(entitiTotalesProduccionDiaria));
        }

        [HttpPut("[action]")]
        public async Task<JsonResult> ActualizarTotalesProduccionDiaria(EntitiTotalesProduccionDiaria entitiTotalesProduccionDiaria)
        {
            return Json(await this.servicioTotalProduccionDiaria.ActualizarTotalesProduccionDiaria(entitiTotalesProduccionDiaria));
        }
    }
}
