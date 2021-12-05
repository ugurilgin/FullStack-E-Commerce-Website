using E_Commerce.ServiceAbstracts;
using E_Commerce.ServiceImplements;
namespace E_Commerce.WorkOfUnit
{
    public class UnitWork:IUnitWorks
    {
        public UnitWork(IAdressService adressService, ICategoryService categoryService, ICustomerService customerService, IOrderService orderService, IPaymentService paymentService, IProductService productService, IShipperService shipperService, IUserService userService)
        {
            this.AdressService = adressService;
            this.CategoryService = categoryService;
            this.CustomerService = customerService;
            this.OrderService = orderService;
            this.PaymentService = paymentService;
            this.ProductService = productService;
            this.ShipperService = shipperService;
            this.UserService = userService;

        }
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
