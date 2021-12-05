using E_Commerce.Data;
using E_Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace E_Commerce.ServiceAbstracts
{
    public interface IUserService
    {
        public Task<IEnumerable<User>> GetAllAsync();
        public Task<User> GetAsync(int id);
        public Task UpdateAsync(int id, User user);
        public Task<User> CreateAsync(User user);
        public Task DeleteAsync(int id);
    }
}