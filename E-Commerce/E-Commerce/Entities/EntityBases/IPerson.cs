using System;

namespace E_Commerce.Entities.EntityBases
{
    public interface IPerson
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }

    }
}
