using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Login;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class LoginController : Controller
    {

        private readonly IServicioLogin servicioLogin;

        public LoginController(IServicioLogin servicioLogin)
        {
            this.servicioLogin = servicioLogin;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> IniciarSesionUsuario(EntitiLogin entitiLogin)
        {
            try
            {
                return Json(await this.servicioLogin.IniciarSesionUsuario(entitiLogin));
            }
            catch (Exception ex)
            {

                return Json($"Error: {ex.Message}");
            }

        }
    }
}
