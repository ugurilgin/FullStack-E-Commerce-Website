using E_Commerce.ServiceAbstracts;
using E_Commerce.ServiceImplements;
namespace E_Commerce.WorkOfUnit
{
    public interface IUnitWorks
    {
        public IAdressService AdressService { get; set; }
        public ICategoryService CategoryService { get; set; }
        public ICustomerService CustomerService { get; set; }
        public IOrderService OrderService { get; set; }
        public IPaymentService PaymentService { get; set; }
        public IProductService ProductService { get; set; }
        public IShipperService ShipperService { get; set; }
        public IUserService UserService { get; set; }
    }
}
