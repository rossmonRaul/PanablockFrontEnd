using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Planta
{
    public interface IServicioPlanta
    {
        Task<bool> AgregarPlanta(EntitiPlanta entitiPlanta);
    }
}
