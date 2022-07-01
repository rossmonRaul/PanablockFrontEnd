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
    public class RepositorioObservacionMantenimiento : IRepositorioObservacionMantenimiento
    {
        private readonly IContextoBD contextoBD;

        public RepositorioObservacionMantenimiento(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezado_ProduccionDiaria", entitiObservacionMantenimiento.idEncabezadoProduccionDiaria);
                data.Add("Descripcion", entitiObservacionMantenimiento.descripcion);

                string query = "SPInsertarObservaciondeMantenimiento";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> ActualizarObservacionMantenimiento(EntitiObservacionMantenimiento entitiObservacionMantenimiento)
        {

            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();

                data.Add("IdObservacionesMantenimiento", entitiObservacionMantenimiento.idObservacionesMantenimiento  );
                data.Add("Descripcion", entitiObservacionMantenimiento.descripcion);
              
                string query = "SPActualizarObservaciondeMantenimiento";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdObservacionesMantenimiento", idObservacionesMantenimiento);
                string query = "SPEliminarObservaciondeMantenimiento";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }


        public async Task<DtoObservacionMantenimiento> ObtenerDetalleObservacionMantenimiento(int idObservacionesMantenimiento)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdObservacionesMantenimiento", idObservacionesMantenimiento);
                string query = "SPObtenerDetalleObservacionMantenimiento";

                return await this.contextoBD.ObtenerDato<DtoObservacionMantenimiento>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

      

        public async Task<List<DtoObservacionMantenimiento>> ObtenerObservacionesMantenimiento()
        {
            try
            {
                string query = "SPObtenerObservacionesMantenimiento";
                var result = await this.contextoBD.ObtenerListaDeDatos<DtoObservacionMantenimiento>(query);

                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
