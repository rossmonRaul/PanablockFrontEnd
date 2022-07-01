﻿using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioObservacionMantenimiento
    {
        Task<DtoDatosSP> InsertarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento);

        Task<DtoDatosSP> ActualizarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento);

        Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento);

        Task<DtoObservacionMantenimiento> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento);

        Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento();
    }
}