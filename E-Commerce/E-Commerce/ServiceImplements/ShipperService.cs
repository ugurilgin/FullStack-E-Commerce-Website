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
    public class ShipperService:IShipperService
    {
        private readonly ApplicationDbContext _context;
        public ShipperService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Shipper>> GetAllAsync()
        {
            return await _context.Shippers.ToListAsync();
        }
      
      

        public async Task<Shipper> GetAsync(int id)
        {
            var shipper = await _context.Shippers.FindAsync(id);
            return shipper;
        }

        public async Task UpdateAsync(int id, Shipper shipper)
        {
            if (id != shipper.ShipperID)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(shipper).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipperExists(id))
                {
                    throw new Exception($"Id'si '{id}' olan kargo bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Shipper> CreateAsync(Shipper shipper)
        {
            _context.Shippers.Add(shipper);
            await _context.SaveChangesAsync();

            return shipper;
        }

        public async Task DeleteAsync(int id)
        {
            var shipper = await _context.Shippers.FindAsync(id);

            if (shipper == null)
            {
                throw new Exception("Kargo Bulunamadı");
            }

            _context.Shippers.Remove(shipper);
            await _context.SaveChangesAsync();
        }

        private bool ShipperExists(int id)
        {
            return _context.Shippers.Any(e => e.ShipperID == id);
        }
    }
}
