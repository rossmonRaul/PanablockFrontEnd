﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Dto
{
    public class DtoPlanta
    {


        public int idPlanta { get; set; }

        public string nombrePlanta { get; set; }

        public string estado { get; set; }

        public string ubicacion { get; set; }

        public DateTime? fechaCreacion { get; set; }

        public DateTime? fechaModificacion { get; set; }

        public string? usuarioCreacion { get; set; }

        public string? usuarioModificacion { get; set; }

        public string? accion { get; set; }
    }
}
