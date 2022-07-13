using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioEncabezadoProduccionDiaria
    {
        Task<DtoDatosSP> InsertarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion);

        Task<DtoDatosSP> ActualizarEncabezadoProduccionDiaria(EntitiEncabezadoProduccionDiaria entitiEncabezadoProduccion);

        Task<DtoEncabezadoProduccionDiaria> ObtenerEncabezadoProduccionDiaria(int idPlanta, DateTime? Fecha);
    }
}
