using Dominio.Interfaces.Infraestrutura.BaseDatos;
using Infraestrutura.BaseDatos;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Infraestrutura
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddInfrastructura(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IContextoBD, ContextoBD>();
            services.AddScoped<IRepositorioPlanta, RepositorioPlanta>();


            return services;
        }
    }
}
