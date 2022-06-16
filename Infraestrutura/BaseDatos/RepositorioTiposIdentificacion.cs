using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;


namespace Infraestrutura.BaseDatos
{
    public class RepositorioTiposIdentificacion : IRepositorioTiposIdentificacion
    {
        private readonly IContextoBD contextoBD;

        public RepositorioTiposIdentificacion(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }
    }
}
