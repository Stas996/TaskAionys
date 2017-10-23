using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAionys.DAL.Models
{
    public class Task
    {
        public int Id { get; set; }
        [ForeignKey("Client")]
        public int ClientId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public virtual Client Client { get; set; }
    }
}
