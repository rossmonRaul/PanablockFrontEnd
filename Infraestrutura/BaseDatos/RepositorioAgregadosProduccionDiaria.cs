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
    public class RepositorioAgregadosProduccionDiaria : IRepositorioAgregadosProduccionDiaria
    {

        private readonly IContextoBD contextoBD;

        public RepositorioAgregadosProduccionDiaria(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarAgregados(EntitiAgregados entitiAgregados)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", entitiAgregados.idEncabezadoProduccionDiaria);
                data.Add("Descripcion", entitiAgregados.descripcion);
                data.Add("TipoAgregado", entitiAgregados.tipoAgregado);
                data.Add("Vueltas", entitiAgregados.vueltas);
                data.Add("UsuarioIngreso", entitiAgregados.usuarioIngreso);
                string query = "SPInsertarAgregados";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<DtoDatosSP> EliminarAgregados(int idAgregadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdAgregadoProduccionDiaria", idAgregadoProduccionDiaria);
                string query = "SPEliminarAgregados";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<DtoAgregados>> ObtenerAgregados(int idEncabezadoProduccionDiaria)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdEncabezadoProduccionDiaria", idEncabezadoProduccionDiaria);
                string query = "SPObtenerAgregados";

                return await this.contextoBD.ObtenerListaDeDatos<DtoAgregados>(query, data);
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
