namespace E_Commerce.Entities
{
    public class AdressCustomer
    {
        public int AdressID { get; set; }
        public Adress Adress { get; set; }

        public int CustomerID { get; set; }
        public Customer Customer { get; set; }  
    }
}
