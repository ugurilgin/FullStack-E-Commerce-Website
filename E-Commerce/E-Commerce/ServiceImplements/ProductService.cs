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
    public class ProductService:IProductService
    {
        private readonly ApplicationDbContext _context;
        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _context.Products.ToListAsync();
        }
      
      

        public async Task<Product> GetAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            return product;
        }

        public async Task UpdateAsync(int id, Product product)
        {
            if (id != product.ProductID)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    throw new Exception($"Id'si '{id}' olan ürün bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Product> CreateAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public async Task DeleteAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                throw new Exception("Ürün Bulunamadı");
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductID == id);
        }
    }
}
