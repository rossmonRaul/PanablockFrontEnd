﻿using Dominio.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioHorario
    {

        Task<List<DtoHorario>> ObtenerHorarios();
    }
}
