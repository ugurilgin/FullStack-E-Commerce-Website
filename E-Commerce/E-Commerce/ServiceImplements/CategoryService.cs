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
    public class CategoryService: ICategoryService
    {
        private readonly ApplicationDbContext _context;
        public CategoryService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            return await _context.Categories.ToListAsync();
        }
      
      

        public async Task<Category> GetAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            return category;
        }

        public async Task UpdateAsync(int id, Category category)
        {
            if (id != category.CategoryId)
            {
                throw new Exception("Idler Uyuşmadı");
            }
            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    throw new Exception($"Id'si '{id}' olan Kategori bulunamadı");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Category> CreateAsync(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task DeleteAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
            {
                throw new Exception("Kategori Bulunamadı");
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.CategoryId == id);
        }
    }
}
