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
    public class OrderService: IOrderService
    {
        private readonly ApplicationDbContext _context;
        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await _context.Orders.ToListAsync();
        }
      
      

        public async Task<Order> GetAsync(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            return order;
        }

        public async Task UpdateAsync(int id, Order order)
        {
            if (id != order.OrderId)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExist(id))
                {
                    throw new Exception($"Id'si '{id}' olan sipariş bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Order> CreateAsync(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return order;
        }

        public async Task DeleteAsync(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                throw new Exception("Sipariş Bulunamadı");
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }

        private bool OrderExist(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}
