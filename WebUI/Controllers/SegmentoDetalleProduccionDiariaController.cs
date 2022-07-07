using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.SegmentoDetalleProduccionDiaria;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class SegmentoDetalleProduccionDiariaController : Controller
    {
        private readonly IServicioSegmentoDetalleProduccionDiaria SegmentoDetalleProduccionDiaria;
        public SegmentoDetalleProduccionDiariaController(IServicioSegmentoDetalleProduccionDiaria servicioSegmentoDetalle)
        {
            this.SegmentoDetalleProduccionDiaria = servicioSegmentoDetalle;
        }

        [HttpPost("[action]")]
        [Authorize]
        public async Task<JsonResult> InsertarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {
            return Json(await this.SegmentoDetalleProduccionDiaria.InsertarSegmentoDetalleProduccionDiaria(entitiSegmentoDetalle));
        }

        [HttpPut("[action]")]
        [Authorize]
        public async Task<JsonResult> ActualizarSegmentoDetalleProduccionDiaria(EntitiSegmentoDetalleProduccion entitiSegmentoDetalle)
        {

            return Json(await this.SegmentoDetalleProduccionDiaria.ActualizarSegmentoDetalleProduccionDiaria(entitiSegmentoDetalle));
        }
       

        [HttpGet("[action]/{idEncabezadoProduccion}")]
        [Authorize]
        public async Task<JsonResult> ObtenerSegementoDetalleProduccionDiaria(int idEncabezadoProduccion)
        {
            return Json(await this.SegmentoDetalleProduccionDiaria.ObtenerSegementoDetalleProduccionDiaria(idEncabezadoProduccion));
        }
    }
}
