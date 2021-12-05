using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IAdressService
    {
        public Task<IEnumerable<Adress>> GetAllAsync();
        public Task<Adress> GetAsync(int id);
        public Task UpdateAsync(int id, Adress adress);
        public Task<Adress> CreateAsync(Adress adress);
        public Task DeleteAsync(int id);
    }
}