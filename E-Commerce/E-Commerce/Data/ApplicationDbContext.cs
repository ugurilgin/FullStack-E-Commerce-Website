using Microsoft.EntityFrameworkCore;
using E_Commerce.Entities;

namespace E_Commerce.Data
{
    public class ApplicationDbContext:DbContext
    {
      
            public ApplicationDbContext(DbContextOptions options) : base(options)
            {

            }

            public DbSet<Category> Categories { get; set; }
            public DbSet<Customer> Customers { get; set; }
            public DbSet<Order> Orders { get; set; }
            public DbSet<Payment> Payments { get; set; }
            public DbSet<Product> Products { get; set; }
            public DbSet<Shipper> Shippers { get; set; }
            public DbSet<Adress> Adress { get; set; }
            public DbSet<User> Users { get; set; }
       // public DbSet<AdressCustomer> AdressCustomers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<AdressCustomer>()
         .HasKey(bc => new { bc.AdressID, bc.CustomerID });
            modelBuilder.Entity<AdressCustomer>()
                .HasOne(bc => bc.Adress)
                .WithMany(b => b.AdressCustomers)
                .HasForeignKey(bc => bc.AdressID);
            modelBuilder.Entity<AdressCustomer>()
                .HasOne(bc => bc.Customer)
                .WithMany(c => c.AdressCustomers)
                .HasForeignKey(bc => bc.CustomerID);

        }
    }
    }


