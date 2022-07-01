using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("{controller}")]
    [ApiController]
    public class UsuarioController : Controller
    {

        private readonly IServicioUsuario servicioUsuario;
        public UsuarioController(IServicioUsuario servicioUsuario)
        {
            this.servicioUsuario = servicioUsuario;
        }

        [HttpPost("[action]")]
        public async Task<JsonResult> InsertarUsuario(EntitiUsuario entitiUsuario)
        {
            try
            {
                return Json(await this.servicioUsuario.InsertarUsuario(entitiUsuario));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }
        }

        [HttpPut("[action]")]
        public async Task<JsonResult> ActualizarUsuario(EntitiUsuario entitiPlanta)
        {
            try
            {
                return Json(await this.servicioUsuario.ActualizarUsuario(entitiPlanta));
            }
            catch (System.Exception ex)
            {

                throw ex;
            }

        }

        [HttpDelete("[action]")]
        public async Task<JsonResult> EliminarUsuario(int idUsuario)
        {
            return Json(await this.servicioUsuario.EliminarUsuario(idUsuario));
        }

        [HttpGet("[action]/{idUsuario}")]
        public async Task<JsonResult> ObtenerDetalleUsuarioID(int idUsuario)
        {
            return Json(await this.servicioUsuario.ObtenerDetalleUsuarioID(idUsuario));
        }

        [HttpGet("[action]/{nombre}")]
        public async Task<JsonResult> ObtenerDetalleUsuarioNombre(string nombre)
        {
            return Json(await this.servicioUsuario.ObtenerDetalleUsuarioNombre(nombre));
        }


        [HttpGet("[action]")]
        public async Task<JsonResult> ObtenerUsuarios()
        {
            return Json(await this.servicioUsuario.ObtenerUsuarios());
        }

        [HttpPut("[action]")]
        public async Task<JsonResult> ActualizarContrasenhaTemporal(EntitiUsuario entitiPlanta)
        {
            try
            {
                return Json(await this.servicioUsuario.ActualizarContrasenhaTemporal(entitiPlanta));
            }
            catch (System.Exception ex)
            {
                throw ex;
            }

        }

    }
}
