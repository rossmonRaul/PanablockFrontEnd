using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Planta;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Planta
{
    public class ServicioPlanta : IServicioPlanta
    {
        private readonly IRepositorioPlanta repositorioPlanta;

        public ServicioPlanta(IRepositorioPlanta repositorioPlanta)
        {
            this.repositorioPlanta = repositorioPlanta;
        }

        public async Task<bool> AgregarPlanta(EntitiPlanta entitiPlanta)
        {
            return await this.repositorioPlanta.AgregarPlanta(entitiPlanta);
        }
    }
}
