using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiProducto
    {

        public int idProducto { get; set; }

        public string nombreProducto { get; set; }

        public string descripcionProducto { get; set; }

        public decimal factor { get; set; }

        public bool estado { get; set; }

        public List<int> tipoMateriales { get; set; }
    }
}
