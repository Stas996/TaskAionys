using System;

namespace TaskAionys.ViewModels
{
    public class TaskViewModel
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public virtual ClientViewModel Client { get; set; }
    }
}
