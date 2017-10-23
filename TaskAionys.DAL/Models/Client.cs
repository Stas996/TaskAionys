using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAionys.DAL.Models
{
    public class Client
    {
        public int Id { get; set; }
        [ForeignKey("City")]
        public int CityId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumbersCSV { get; set; }

        public virtual City City { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
    }
}
