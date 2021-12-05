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
    public class CustomerService:ICustomerService
    {
        private readonly ApplicationDbContext _context;
        public CustomerService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Customer>> GetAllAsync()
        {
            return await _context.Customers.ToListAsync();
        }

        public async Task<IEnumerable<Customer>> GetAllWithAdressAsync()
        {
            return await _context.Customers.Include(p => p.AdressCustomers).ToListAsync();
        }

        public async Task<Customer> GetAsync(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            return customer;
        }

        public async Task UpdateAsync(int id, Customer customer)
        {
            if (id != customer.CustomerID)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExist(id))
                {
                    throw new Exception($"Id'si '{id}' olan Müşteri bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Customer> CreateAsync(Customer customer)
        {
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        public async Task DeleteAsync(int id)
        {
            var customer = await _context.Customers.FindAsync(id);

            if (customer == null)
            {
                throw new Exception("Müşteri Bulunamadı");
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();
        }

        private bool CustomerExist(int id)
        {
            return _context.Customers.Any(e => e.CustomerID == id);
        }
    }
}
