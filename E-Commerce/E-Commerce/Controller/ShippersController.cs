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
    public class ShippersController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public ShippersController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Shippers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shipper>>> GetShippers()
        {
            var shippers = await _unitOfWork.ShipperService.GetAllAsync();
            return Ok(shippers);
        }

        // GET: api/Shippers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shipper>> GetShipper(int id)
        {
            var shipper= await _unitOfWork.ShipperService.GetAsync(id);
            return Ok(shipper);
        }

        // PUT: api/Shippers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShipper(int id, Shipper shipper)
        {
            await _unitOfWork.ShipperService.UpdateAsync(id, shipper);
            return Ok(shipper.ShipperID);
        }

        // POST: api/Shippers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Shipper>> PostShipper(Shipper shipper)
        {
            var created = await _unitOfWork.ShipperService.CreateAsync(shipper);
            return Ok(created);
        }

        // DELETE: api/Shippers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShipper(int id)
        {
            await _unitOfWork.ShipperService.DeleteAsync(id);
            return Ok();
        }

       
    }
}
