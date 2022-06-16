using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioUsuario : IRepositorioUsuario
    {
        private readonly IContextoBD contextoBD;

        public RepositorioUsuario(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

    }
}
