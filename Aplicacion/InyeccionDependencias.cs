using Aplicacion.Planta;
using Aplicacion.Usuario;
using Dominio.Interfaces.Aplicacion.Planta;
using Dominio.Interfaces.Aplicacion.Usuario;
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
            services.AddScoped<IServicioUsuario, ServicioUsuario>();
            return services;
        }
    }
}
