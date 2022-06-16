﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dominio.Interfaces.Infraestrutura.BaseDatos;


namespace Infraestrutura.BaseDatos
{
    public class RepositorioControlDeCalidad : IRepositorioControlDeCalidad
    {
        private readonly IContextoBD contextoBD;

        public RepositorioControlDeCalidad(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

    }
}
