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
    public class AdressCustomerService: IAdressCustomerService
    {
        private readonly ApplicationDbContext _context;
        public AdressCustomerService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<AdressCustomer>> GetAllAsync()
        {
            //return await _context.AdressCustomers.ToListAsync();
            throw new NotImplementedException();
        }
      
      

        public async Task<AdressCustomer> GetAsync(int id)
        {
            /*var adress = await _context.AdressCustomers.FindAsync(id);
            return adress;*/
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(int id, AdressCustomer adress)
        {
            /* if (id != adress.AdressID)
             {
                 throw new Exception("Idler Uyuşmadı");
             }
             _context.Entry(adress).State = EntityState.Modified;

             try
             {
                 await _context.SaveChangesAsync();
             }
             catch (DbUpdateConcurrencyException)
             {
                 if (!AdressExists(id))
                 {
                     throw new Exception($"Id'si '{id}' olan Adres bulunamadı");
                 }
                 else
                 {
                     throw;
                 }
             }*/
            throw new NotImplementedException();
        }

        public async Task<AdressCustomer> CreateAsync(AdressCustomer adress)
        {
            /* _context.Adress.Add(adress);
             await _context.SaveChangesAsync();

             return adress;*/
            throw new NotImplementedException();
        }

        public async Task DeleteAsync(int id)
        {
            /*var adress = await _context.Adress.FindAsync(id);

            if (adress == null)
            {
                throw new Exception("Adres Bulunamadı");
            }

            _context.Adress.Remove(adress);
            await _context.SaveChangesAsync();*/
            throw new NotImplementedException();
        }

        private bool AdressExists(int id)
        {
            /*return _context.Adress.Any(e => e.AdressID == id);*/
            throw new NotImplementedException();
        }
    }
}
