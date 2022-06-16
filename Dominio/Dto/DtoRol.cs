using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoRol
    {
        public int idRol { get; set; }

        public string descripcion { get; set; }

        public bool estado { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }


    }
}
