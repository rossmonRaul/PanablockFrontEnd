using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class RepositorioDetalleProduccionDiaria : IRepositorioDetalleProduccionDiaria
    {

        private readonly IContextoBD contextoBD;

        public RepositorioDetalleProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarDetalleProduccionDiaria(EntitiDetalleProduccionDiaria entitiDetalleProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiDetalleProduccionDiaria.idEncabezadoProduccionDiaria);
                data.Add("IdHorario", entitiDetalleProduccionDiaria.idHorario);
                data.Add("Placas", entitiDetalleProduccionDiaria.placas);
                data.Add("Observacion", entitiDetalleProduccionDiaria.observacion);
          
                string query = "SPInsertarDetalleProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarDetalleProduccionDiaria(EntitiDetalleProduccionDiaria entitiDetalleProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiDetalleProduccionDiaria.idEncabezadoProduccionDiaria);
                data.Add("IdHorario", entitiDetalleProduccionDiaria.idHorario);
                data.Add("Placas", entitiDetalleProduccionDiaria.placas);
                data.Add("Observacion", entitiDetalleProduccionDiaria.observacion);
                string query = "SPActualizarDetalleProduccionDiaria";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoDetalleProduccionDiaria>> ObtenerDetalleProduccionDiaria(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerDetalleProduccionDiaria";

                return await this.contextoBD.ObtenerListaDeDatos<DtoDetalleProduccionDiaria>(query, data);
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
