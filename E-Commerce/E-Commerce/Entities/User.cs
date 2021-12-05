using E_Commerce.Entities.EntityBases;
using System;

namespace E_Commerce.Entities
{
    public class User : IPerson, IEntity
    {
        public int Id { get; set; }
        public DateTime createDate { get; set; }
        public DateTime updateDate { get ; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
        public bool ReadOrders  { get; set; }
        public bool WriteOrders { get; set; }
        public bool ReadProducts { get; set; }
        public bool WriteProducts { get; set; }
        public bool ReadCategories { get; set; }
        public bool WriteCategories { get; set; }
        public bool ReadUsers { get; set; }
        public bool WriteUsers { get; set; }

    }
}
