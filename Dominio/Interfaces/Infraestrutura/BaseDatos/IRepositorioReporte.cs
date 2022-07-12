﻿using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Infraestrutura.BaseDatos
{
    public interface IRepositorioReporte
    {

        Task<List<DtoReporteAcumulativoMensual>> ReporteAcumulativoMensual(EntitiReporte reporte);
        Task<List<DtoReporteProductos>> ReporteProductos(EntitiReporte reporte);

    }
}
