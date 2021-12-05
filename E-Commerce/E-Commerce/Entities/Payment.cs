using E_Commerce.Entities.EntityBases;
using System;

namespace E_Commerce.Entities
{
    public class Payment : IEntity
    {
        public int PaymentId { get; set; }
        public string PaymentType { get; set; }
        public bool Allowed { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }
    }
}
