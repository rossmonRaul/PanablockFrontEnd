﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IContextoBD
    {
        Task<bool> EjecutarSP(string query, Dictionary<string, object> data);
        Task<T> ObtenerDato<T>(string sqlQuery, Dictionary<string, object> data = null);
        Task<List<T>> ObtenerListaDeDatos<T>(string sqlQuery, Dictionary<string, object> data = null);
    }
}
