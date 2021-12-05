using E_Commerce.Entities.EntityBases;
using System;
using System.Collections.Generic;

namespace E_Commerce.Entities
{
    public class Customer : IPerson
    {

        public virtual ICollection<AdressCustomer> AdressCustomers { get; set; }
        public int CustomerID { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

    }
}
