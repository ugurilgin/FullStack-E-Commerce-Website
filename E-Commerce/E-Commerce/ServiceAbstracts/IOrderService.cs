using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IOrderService
    {
        public Task<IEnumerable<Order>> GetAllAsync();
        public Task<Order> GetAsync(int id);
        public Task UpdateAsync(int id, Order order);
        public Task<Order> CreateAsync(Order order);
        public Task DeleteAsync(int id);
    }
}