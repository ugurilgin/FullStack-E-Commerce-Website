using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using E_Commerce.Data;
using E_Commerce.Entities;
using E_Commerce.WorkOfUnit;
namespace E_Commerce.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public CategoriesController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = await _unitOfWork.CategoryService.GetAllAsync();
            return Ok(categories);
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _unitOfWork.CategoryService.GetAsync(id);
            return Ok(category);
        }

        // PUT: api/Categories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategory(int id, Category category)
        {
            await _unitOfWork.CategoryService.UpdateAsync(id, category);
            return Ok(category.CategoryId);
        }

        // POST: api/Categories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Category>> PostCategory(Category category)
        {
            var created = await _unitOfWork.CategoryService.CreateAsync(category);
            return Ok(created);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            await _unitOfWork.CategoryService.DeleteAsync(id);
            return Ok();
        }

      
    }
}
