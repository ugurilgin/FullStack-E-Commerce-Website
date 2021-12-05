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
    public class PaymentService:IPaymentService
    {
        private readonly ApplicationDbContext _context;
        public PaymentService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Payment>> GetAllAsync()
        {
            return await _context.Payments.ToListAsync();
        }
      
      

        public async Task<Payment> GetAsync(int id)
        {
            var payment = await _context.Payments.FindAsync(id);
            return payment;
        }

        public async Task UpdateAsync(int id, Payment payment)
        {
            if (id != payment.PaymentId)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
                {
                    throw new Exception($"Id'si '{id}' olan ödeme yöntemi bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Payment> CreateAsync(Payment payment)
        {
            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();

            return payment;
        }

        public async Task DeleteAsync(int id)
        {
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
            {
                throw new Exception("Ödeme Yöntemi Bulunamadı");
            }

            _context.Payments.Remove(payment);
            await _context.SaveChangesAsync();
        }

        private bool PaymentExists(int id)
        {
            return _context.Payments.Any(e => e.PaymentId == id);
        }
    }
}
