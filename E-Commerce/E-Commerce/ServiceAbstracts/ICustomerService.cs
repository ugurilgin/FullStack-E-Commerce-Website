using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface ICustomerService
    {
        public Task<IEnumerable<Customer>> GetAllAsync();
        public Task<IEnumerable<Customer>> GetAllWithAdressAsync();
        public Task<Customer> GetAsync(int id);
        public Task UpdateAsync(int id, Customer customer);
        public Task<Customer> CreateAsync(Customer customer);
        public Task DeleteAsync(int id);
    }
}