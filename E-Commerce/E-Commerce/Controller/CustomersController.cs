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
    public class CustomersController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public CustomersController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            var customers = await _unitOfWork.CustomerService.GetAllWithAdressAsync();
            return Ok(customers);
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _unitOfWork.CustomerService.GetAsync(id);
            return Ok(customer);
        }
        [HttpPost("{id}/add-adress")]
        public async Task<IActionResult> AddAdress(int id, [FromBody] Adress adress)
        {
            /*adress.AdressCustomers = await _unitOfWork.Adres.GetAsync(id);
            var createadress = await _unitOfWork.AdressService.CreateAsync(adress);
            return Ok(createadress);*/
            throw new NotImplementedException();
        }
        // PUT: api/Customers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            await _unitOfWork.CustomerService.UpdateAsync(id, customer);
            return Ok(customer.CustomerID);
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            var created = await _unitOfWork.CustomerService.CreateAsync(customer);
            return Ok(created);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            await _unitOfWork.CustomerService.DeleteAsync(id);
            return Ok();
        }

       
    }
}
