using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiEncabezadoProduccionDiaria
    {
        public int IdEncabezadoProduccionDiaria { get; set; }
        public DateTime? Fecha { get; set; }
        public DateTime? HoraInicio { get; set; }
        public DateTime? HoraFinal { get; set; }
        public int IdPlanta { get; set; }
        public int IdProducto { get; set; }

    }
}
