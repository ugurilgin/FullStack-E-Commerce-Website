using E_Commerce.Entities.EntityBases;
using System;
using System.Collections.Generic;

namespace E_Commerce.Entities
{
    public class Adress:IEntity
    {
      
        public virtual ICollection<AdressCustomer> AdressCustomers { get; set; }
        public int AdressID { get; set; }
        public string AdressLine1 { get; set;}
        public string AdressLine2 { get; set; }
        public string Region { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string  PostCode { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }
    }
}
