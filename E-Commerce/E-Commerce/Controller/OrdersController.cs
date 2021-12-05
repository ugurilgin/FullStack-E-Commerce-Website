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
    public class OrdersController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public OrdersController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var orders = await _unitOfWork.OrderService.GetAllAsync();
            return Ok(orders);
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var orders = await _unitOfWork.OrderService.GetAsync(id);
            return Ok(orders);
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            await _unitOfWork.OrderService.UpdateAsync(id, order);
            return Ok(order.OrderId);
        }

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            var created = await _unitOfWork.OrderService.CreateAsync(order);
            return Ok(created);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            await _unitOfWork.OrderService.DeleteAsync(id);
            return Ok();
        }

        
    }
}
