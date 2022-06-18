using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Entiti
{
    public class EntitiUsuario
    {
        public int idUsuario { get; set; }

        public int idPersona { get; set; }

        public int idRol { get; set; }

        public string coreoElectronico { get; set; }

        public string contrasenaTemporal { get; set; }

        public string contrasena { get; set; }

        public bool estado { get; set; }

        public int idPlanta { get; set; }
     
    }
}
