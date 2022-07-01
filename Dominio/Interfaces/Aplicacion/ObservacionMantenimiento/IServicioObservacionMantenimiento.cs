using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.ObservacionMantenimiento
{
    public interface IServicioObservacionMantenimiento
    {
        Task<DtoDatosSP> InsertarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento);

        Task<DtoDatosSP> ActualizarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento);

        Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento);

        Task<DtoObservacionMantenimiento> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento);

        Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento();
    }
}
