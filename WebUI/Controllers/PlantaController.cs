using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Planta;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class PlantaController : Controller
    {
        private readonly IServicioPlanta servicioPlanta;

        public PlantaController(IServicioPlanta servicioPlanta)
        {
            this.servicioPlanta = servicioPlanta;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> AgregarPlanta(EntitiPlanta entitiPlanta)
        {
            return Json(await this.servicioPlanta.AgregarPlanta(entitiPlanta));
        }
    }
}
