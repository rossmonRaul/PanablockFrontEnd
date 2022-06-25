using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoControlDeCalidad
    {

        public int idCalidad { get; set; }

        public int idProducto { get; set; }

        public string observaciones { get; set; }

        public string turno { get; set; }

        public string estatus { get; set; }

        public string estado { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? accion { get; set; }

    }
}
