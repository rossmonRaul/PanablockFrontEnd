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
            //contexto BD
            services.AddScoped<IContextoBD, ContextoBD>();

            //repositorios de cada CRUD
            services.AddScoped<IRepositorioPlanta, RepositorioPlanta>();
            services.AddScoped<IRepositorioActividadPlanta, RepositorioActividadPlanta>();
            services.AddScoped<IRepositorioControlDeCalidad, RepositorioControlDeCalidad>();
            services.AddScoped<IRepositorioPersona, RepositorioPersona>();
            services.AddScoped<IRepositorioProducto, RepositorioProducto>();
            services.AddScoped<IRepositorioRol, RepositorioRol>();
            services.AddScoped<IRepositorioTiposIdentificacion, RepositorioTiposIdentificacion>();
            services.AddScoped<IRepositorioTurno, RepositorioTurno>();



            return services;
        }
    }
}
