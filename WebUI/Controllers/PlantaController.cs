using Dominio.Entiti;
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

    public class PlantaController : Controller
    {
      
        private readonly IServicioPlanta servicioPlanta;

        public PlantaController(IServicioPlanta servicioPlanta)
        {
            this.servicioPlanta = servicioPlanta;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> InsertarPlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.InsertarPlanta(entitiPlanta));
        }

        [HttpPut("[action]")]
        public async Task<JsonResult> ActualizarPlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.ActualizarPlanta(entitiPlanta));
        }

        [HttpDelete("[action]")]
        public async Task<JsonResult>EliminarPlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.EliminarPlanta(entitiPlanta));
        }

        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerDetallePlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.ObtenerDetallePlanta(entitiPlanta));
        }

        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerPlantas()
        {
            return Json(await this.servicioPlanta.ObtenerPlantas());
        }
    }
}
