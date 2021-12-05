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
    public class AdressesController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public AdressesController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Adresses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Adress>>> GetAdress()
        {
            var adresses = await _unitOfWork.AdressService.GetAllAsync();
            return Ok(adresses);
        }

        // GET: api/Adresses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Adress>> GetAdress(int id)
        {
            var adress = await _unitOfWork.AdressService.GetAsync(id);
            return Ok(adress);
        }

        // PUT: api/Adresses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdress(int id, Adress adress)
        {
            await _unitOfWork.AdressService.UpdateAsync(id, adress);
            return Ok(adress.AdressID);
        }

        // POST: api/Adresses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Adress>> PostAdress(Adress adress)
        {
            var created = await _unitOfWork.AdressService.CreateAsync(adress);
            return Ok(created);
        }

        // DELETE: api/Adresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdress(int id)
        {
            await _unitOfWork.AdressService.DeleteAsync(id);
            return Ok();
        }

       
    }
}
