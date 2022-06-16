using Dapper;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestrutura.BaseDatos
{
    public class ContextoBD : IContextoBD
    {
        private SqlConnection sqlConnection;
        private SqlCommand sqlCommand;
        private readonly IConfiguration Configuration;

        public ContextoBD(IConfiguration configuration)
        {
            this.sqlConnection = new SqlConnection();
            this.sqlCommand = new SqlCommand();
            Configuration = configuration;
        }

        private string ObtenerConnectionString()
        {
            return Configuration[$"ConnectionStrings:BD"];
        }

        public async Task<bool> EjecutarSP(string query, Dictionary<string, object> data)
        {
            try
            {
                this.sqlConnection.ConnectionString = this.ObtenerConnectionString();
                this.sqlConnection.Open();
                this.sqlCommand = new SqlCommand(query, this.sqlConnection);
                this.sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                foreach (var item in data)
                {
                    sqlCommand.Parameters.AddWithValue(item.Key, item.Value);
                }
                await sqlCommand.ExecuteNonQueryAsync();
            }
            catch (SqlException)
            {
                throw;
            }
            finally
            {
                this.sqlConnection.Close();
            }
            return true;
        }

        public async Task<T> ObtenerDato<T>(string sqlQuery, Dictionary<string, object> data = null)
        {
            object value = new object();
            try
            {
                this.sqlConnection.ConnectionString = this.ObtenerConnectionString();
                this.sqlConnection.Open();
                DynamicParameters queryParameters = new DynamicParameters();
                this.PrepararConsultaDapper(ref sqlQuery, ref queryParameters, data);
                var result = await this.sqlConnection.QueryAsync<T>(sqlQuery, queryParameters, commandType: System.Data.CommandType.StoredProcedure);
                value = result.FirstOrDefault();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                this.sqlConnection.Close();
            }
            return (T)Convert.ChangeType(value, typeof(T));
        }

        public async Task<List<T>> ObtenerListaDeDatos<T>(string sqlQuery, Dictionary<string, object> data = null)
        {
            List<T> lista = new List<T>();
            try
            {
                this.sqlConnection.ConnectionString = this.ObtenerConnectionString();
                this.sqlConnection.Open();
                DynamicParameters queryParameters = new DynamicParameters();
                this.PrepararConsultaDapper(ref sqlQuery, ref queryParameters, data);
                var result = await this.sqlConnection.QueryAsync<T>(sqlQuery, queryParameters, commandType: System.Data.CommandType.StoredProcedure);
                lista = result.ToList();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                this.sqlConnection.Close();
            }
            return lista;
        }

        private void PrepararConsultaDapper(ref string NombreProcedimientoAlmacenado, ref DynamicParameters parameters,
            Dictionary<string, object> Parametros)
        {
            int numeroParametros = 0;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append(NombreProcedimientoAlmacenado);
            foreach (var item in Parametros)
            {
                parameters.Add("@" + item.Key, item.Value);
                if (numeroParametros > 0)
                {
                    stringBuilder.Append(",");
                }
                stringBuilder.Append(" @");
                stringBuilder.Append(item.Key);
                numeroParametros++;
            }
            NombreProcedimientoAlmacenado = stringBuilder.ToString();
        }
    }
}
