using System;
using System.Collections.Generic;
using E_Commerce.Entities.EntityBases;
namespace E_Commerce.Entities
{
    public class Order:IEntity
    {
        public int OrderId { get; set; }
        public int CustomerID { get; set; }
        public ICollection<Product> Products { get; set; }
        public int ShipperID { get; set; }
        public int PaymentID { get; set; }
        public double Tax { get; set; }
        public DateTime BillDate { get; set; }
        public DateTime ShipDate { get; set; }
        public int OrderNumber { get; set; }
        public int ShipNumber { get; set; }
        public double Total { get; set; }
        public int Id { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }


        /*public double[] Prices { get; set; }
       public int[] Quantity { get; set; }
       public double[] Discount { get; set; }*/
    }
}
