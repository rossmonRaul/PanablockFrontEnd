using Dominio.Dto;
using Dominio.Entiti;
using Dominio.Interfaces.Aplicacion.Producto;
using Dominio.Interfaces.Infraestrutura.BaseDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion.Producto
{
    public class ServicioProducto : IServicioProducto
    {
        private readonly IRepositorioProducto repositorioProducto;

        public ServicioProducto(IRepositorioProducto repositorioProducto)
        {
            this.repositorioProducto = repositorioProducto;
        }

        public async Task<DtoDatosSP> InsertarProducto(EntitiProducto entitiProducto)
        {
            return await this.repositorioProducto.InsertarProducto(entitiProducto);
        }

        public async Task<int> ObtenerUltimoProductoInsertado()
        {
            return await this.repositorioProducto.ObtenerUltimoProductoInsertado();
        }

        public async Task<DtoDatosSP> InsertarTipoMaterialProducto(int idProducto, int item)
        {
            return await this.repositorioProducto.InsertarTipoMaterialProducto(idProducto, item);

        }

        
        public async Task<DtoDatosSP> ActualizarProducto(EntitiProducto entitiProducto)
        {
            throw new NotImplementedException();
        }

        public async Task<DtoDatosSP> EliminarProducto(int idProducto)
        {
            return await this.repositorioProducto.EliminarProducto(idProducto);
        }

        public async Task<DtoProducto> ObtenerDetalleProductoID(int idProducto)
        {
            throw new NotImplementedException();
        }

        public async Task<DtoProducto> ObtenerDetalleProductoNombre(string nombre)
        {
            throw new NotImplementedException();
        }

        public async Task<List<DtoProducto>> ObtenerProductos()
        {
            throw new NotImplementedException();
        }
    }
}
