using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IPaymentService
    {
        public Task<IEnumerable<Payment>> GetAllAsync();
        public Task<Payment> GetAsync(int id);
        public Task UpdateAsync(int id, Payment payment);
        public Task<Payment> CreateAsync(Payment payment);
        public Task DeleteAsync(int id);
    }
}