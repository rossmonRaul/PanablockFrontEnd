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

        public async Task<bool> AgregarPlanta(EntitiPlanta entitiPlanta)
        {
            try
            {
                Dictionary<string, object> data = new Dictionary<string, object>();
                data.Add("idPlanta", entitiPlanta.idPlanta);
                string query = "SPAgregarPlanta";

                return await this.contextoBD.EjecutarSP(query, data);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }   
}
