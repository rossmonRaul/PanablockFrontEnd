using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiControlDeCalidad
    {

        public int idCalidad { get; set; }

        public int idProducto { get; set; }

        public string observaciones { get; set; }

        public string turno { get; set; }

        public bool estatus { get; set; }

        public bool estado { get; set; }
    }
}
