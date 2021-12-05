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
    public class PaymentsController : ControllerBase
    {
        private readonly IUnitWorks _unitOfWork;
        public PaymentsController(IUnitWorks unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Payments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
            var payments = await _unitOfWork.PaymentService.GetAllAsync();
            return Ok(payments);
        }

        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
            var payment = await _unitOfWork.PaymentService.GetAsync(id);
            return Ok(payment);
        }

        // PUT: api/Payments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            await _unitOfWork.PaymentService.UpdateAsync(id, payment);
            return Ok(payment.PaymentId);
        }

        // POST: api/Payments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Payment>> PostPayment(Payment payment)
        {
            var created = await _unitOfWork.PaymentService.CreateAsync(payment);
            return Ok(created);
        }

        // DELETE: api/Payments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            await _unitOfWork.PaymentService.DeleteAsync(id);
            return Ok();
        }

    }
}
