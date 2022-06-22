using Aplicacion.Planta;
using Aplicacion.Usuario;
using Aplicacion.TipoMaterial;
using Dominio.Interfaces.Aplicacion.Planta;
using Dominio.Interfaces.Aplicacion.Usuario;
using Dominio.Interfaces.Aplicacion.TipoMaterial;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using Dominio.Interfaces.Aplicacion.Producto;
using Aplicacion.Producto;

namespace Aplicacion
{
    public static class InyeccionDependencias
    {
        public static IServiceCollection AddAplicacion(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IServicioPlanta, ServicioPlanta>();
            services.AddScoped<IServicioUsuario, ServicioUsuario>();
            services.AddScoped<IServicioProducto, ServicioProducto>();
            services.AddScoped<IServicioTipoMaterial, ServicioTipoMaterial>();

            return services;
        }
    }
}
