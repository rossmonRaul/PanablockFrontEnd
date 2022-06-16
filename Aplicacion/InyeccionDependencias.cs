using Aplicacion.Planta;
using Dominio.Interfaces.Aplicacion.Planta;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Aplicacion
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddAplicacion(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IServicioPlanta, ServicioPlanta>();
            return services;
        }
    }
}
