using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IAdressCustomerService
    {
        public Task<IEnumerable<AdressCustomer>> GetAllAsync();
        public Task<AdressCustomer> GetAsync(int id);
        public Task UpdateAsync(int id, AdressCustomer adresscustomer);
        public Task<AdressCustomer> CreateAsync(AdressCustomer adresscustomer);
        public Task DeleteAsync(int id);
    }
}