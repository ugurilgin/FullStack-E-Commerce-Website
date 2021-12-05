using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface ICategoryService
    {
        public Task<IEnumerable<Category>> GetAllAsync();
        public Task<Category> GetAsync(int id);
        public Task UpdateAsync(int id, Category category);
        public Task<Category> CreateAsync(Category category);
        public Task DeleteAsync(int id);
    }
}