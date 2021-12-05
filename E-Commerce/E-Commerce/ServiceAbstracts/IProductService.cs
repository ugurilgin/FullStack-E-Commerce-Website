using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IProductService
    {
        public Task<IEnumerable<Product>> GetAllAsync();
        public Task<Product> GetAsync(int id);
        public Task UpdateAsync(int id, Product product);
        public Task<Product> CreateAsync(Product product);
        public Task DeleteAsync(int id);
    }
}