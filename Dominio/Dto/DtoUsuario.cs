using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoUsuario
    {
        //public int idUsuario { get; set; }

        //public int idPersona { get; set; }

        //public int idRol { get; set; }

        //public string correoElectronico { get; set; }

        //public string contrasenaTemporal { get; set; }

        //public string contrasena { get; set; }

        //public string estado { get; set; }

        //public int idPlanta { get; set; }

        //public DateTime? fechaCreacion{ get; set; }

        //public DateTime? fechaModificacion { get; set; }

        //public string? usuarioCreacion { get; set; }

        //public string? usuarioModificacion { get; set; }

        //public string? accion { get; set; }

        public int idUsuario { get; set; }
        public string estado { get; set; }
        public string fechaCreacion { get; set; }
        public int idPersona { get; set; }
        public string nombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }
        public string descripcion { get; set; }
        public string nombrePlanta { get; set; }
    }
}
