using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Dominio.Interfaces.Aplicacion.ActividadPlanta;

namespace Aplicacion.ActividadPlanta
{
    public class ServicioActividadPlanta : IServicioActividadPlanta
    {
        private readonly IRepositorioActividadPlanta repositorioActividadPlanta;

        public ServicioActividadPlanta(IRepositorioActividadPlanta repositorioActividadPlanta)
        {
            this.repositorioActividadPlanta = repositorioActividadPlanta;
        }
    }
}
