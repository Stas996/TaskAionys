using System.Collections.Generic;

namespace TaskAionys.DAL.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Client> Clients { get; set; }
    }
}
