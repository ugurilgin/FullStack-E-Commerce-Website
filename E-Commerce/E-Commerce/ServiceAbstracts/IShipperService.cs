using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IShipperService
    {
        public Task<IEnumerable<Shipper>> GetAllAsync();
        public Task<Shipper> GetAsync(int id);
        public Task UpdateAsync(int id, Shipper shipper);
        public Task<Shipper> CreateAsync(Shipper shipper);
        public Task DeleteAsync(int id);
    }
}