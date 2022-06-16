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
    public class RepositorioPlanta : IRepositorioPlanta
    {
        private readonly IContextoBD contextoBD;

        public RepositorioPlanta(IContextoBD contextoBD)
        {
            this.contextoBD = contextoBD;
        }

        public async Task<DtoDatosSP> InsertarPlanta(EntitiPlanta entitiPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("NombrePlanta", entitiPlanta.nombrePlanta);
                data.Add("Estado", entitiPlanta.estado);
                data.Add("Ubicacion", entitiPlanta.ubicacion);
                string query = "SPInsertarPlanta";

                return await this.contextoBD.EjecutarSP<DtoDatosSP>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

<<<<<<< HEAD
        public async Task<DtoDatosSP> ActualizarPlanta(EntitiPlanta entitiPlanta)
=======
        public async Task<List<EntitiPlanta>> ObtenerDatos()
>>>>>>> b5f18b9e7fe0f7056b1c1412a97320d1f44053d6
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
<<<<<<< HEAD
                data.Add("IdPlanta", entitiPlanta.idPlanta);
                data.Add("NombrePlanta", entitiPlanta.nombrePlanta);
                data.Add("Estado", entitiPlanta.estado);
                data.Add("Ubicacion", entitiPlanta.ubicacion);
                string query = "SPActualizarPlanta";

                return await this.contextoBD.EjecutarSP<DtoDatosSP>(query, data);
=======
                data.Add("idPlanta", 1);
                string query = "SPObtenerPlanta";

                return await this.contextoBD.ObtenerListaDeDatos<EntitiPlanta>(query, data);
>>>>>>> b5f18b9e7fe0f7056b1c1412a97320d1f44053d6
            }
            catch (Exception)
            {
                throw;
            }
        }
<<<<<<< HEAD

        public async Task<DtoDatosSP> EliminarPlanta(EntitiPlanta entitiPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("IdPlanta", entitiPlanta.idPlanta);              
                string query = "SPEliminarPlanta";

                return await this.contextoBD.EjecutarSP<DtoDatosSP>(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }

      
            public async Task<DtoPlanta> ObtenerDetallePlanta(EntitiPlanta entitiPlanta)
            {
                try
                {
                    Dictionary<string, object> data = new Dictionary<string, object>();
                    data.Add("IdPlanta", entitiPlanta.idPlanta);
                    string query = "SPObtenerDetallePlanta";

                    return await this.contextoBD.ObtenerDato<DtoPlanta>(query, data);
                }
                catch (Exception)
                {
                    throw;
                }
            }

            public async Task<List<DtoPlanta>> ObtenerPlantas()
            {
                try
                {
                    string query = "SPObtenerPlantas";
                    var result =  await this.contextoBD.ObtenerListaDeDatos<DtoPlanta>(query);

                    return result;
                }
                catch (Exception)
                {
                    throw;
                }
            }

        }   
=======
    }   
>>>>>>> b5f18b9e7fe0f7056b1c1412a97320d1f44053d6
}
