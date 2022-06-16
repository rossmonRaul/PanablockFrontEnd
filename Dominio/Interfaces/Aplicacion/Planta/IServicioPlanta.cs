﻿using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Planta
{
    public interface IServicioPlanta
    {
        Task<DtoDatosSP> InsertarPlanta(EntitiPlanta entitiPlanta);

        Task<DtoDatosSP> ActualizarPlanta(EntitiPlanta entitiPlanta);

        Task<DtoDatosSP> EliminarPlanta(EntitiPlanta entitiPlanta);

        Task<DtoPlanta> ObtenerDetallePlanta(EntitiPlanta entitiPlanta);

        Task<List<DtoPlanta>> ObtenerPlantas();
    }
}
