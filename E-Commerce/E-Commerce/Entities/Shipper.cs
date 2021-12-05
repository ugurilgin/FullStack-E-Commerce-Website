using E_Commerce.Entities.EntityBases;
using System;

namespace E_Commerce.Entities
{
    public class Shipper : IEntity
    {
        public int ShipperID { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }   
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }
    }
}
