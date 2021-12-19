using System;
using System.Collections.Generic;
using E_Commerce.Entities.EntityBases;
namespace E_Commerce.Entities
{
    public class Order:IEntity
    {
        public int OrderId { get; set; }
        public string CustomerFullName { get; set; }
        public string CustomerEmail { get; set; }
        public string Adress { get; set; }
        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }


        public int CustomerID { get; set; }
        public ICollection<ProductList> Products { get; set; }
        public int ShipperID { get; set; }
        public string ShipperName { get; set; }

        public int PaymentID { get; set; }
        public string PaymentName { get; set; }
       
        public DateTime BillDate { get; set; }
        public DateTime ShipDate { get; set; }
        
        public double Total { get; set; }
        public int Id { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }


        /*public double[] Prices { get; set; }
       public int[] Quantity { get; set; }
       public double[] Discount { get; set; }*/
    }
}
