using System;

namespace E_Commerce.Entities.EntityBases
{
    public interface IEntity
    {
        public DateTime createDate { get; set; }
        public DateTime updateDate { get; set; }
    }
}
