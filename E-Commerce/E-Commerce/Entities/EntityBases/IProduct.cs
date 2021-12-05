namespace E_Commerce.Entities.EntityBases
{
    public interface IProduct
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string TradeMark { get; set; }
        public string Model { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string AvailableSize { get; set; }
        public string AvailableColor { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public string Discount { get; set; }
        public bool ProductAvailable { get; set; }
        public bool DiscountAvailable { get; set; }
        public int UnitInStock { get; set; }
        public string Ranking { get; set; }
        public string Picture { get; set; }
        public string Note { get; set; }
    }
}
