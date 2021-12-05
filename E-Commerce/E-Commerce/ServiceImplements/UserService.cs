using E_Commerce.Entities;
using E_Commerce.Data;
using E_Commerce.ServiceAbstracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace E_Commerce.ServiceImplements
{
    public class UserService:IUserService
    {
        private readonly ApplicationDbContext _context;
        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }
      
      

        public async Task<User> GetAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user;
        }

        public async Task UpdateAsync(int id, User user)
        {
            if (id != user.Id)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    throw new Exception($"Id'si '{id}' olan kulllanıcı bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<User> CreateAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task DeleteAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                throw new Exception("Kullanıcı Bulunamadı");
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
