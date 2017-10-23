namespace TaskAionys.DAL.Models
{
    using System.Data.Entity;

    public class AionysContext : DbContext
    {
        public AionysContext()
            : base("name=AionysContext")
        {
        }

        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<City> Cities { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>()
                .Property(t => t.FirstName)
                .IsUnicode(true);

            modelBuilder.Entity<Client>()
                .Property(t => t.LastName)
                .IsUnicode(true);

            modelBuilder.Entity<Client>()
                .Property(t => t.Address)
                .IsUnicode(true);

            modelBuilder.Entity<Client>()
                .Property(t => t.PhoneNumbersCSV)
                .IsUnicode(true);

            modelBuilder.Entity<Client>()
                .HasRequired(c => c.City)
                .WithMany(t => t.Clients)
                .HasForeignKey(t => t.CityId);

            modelBuilder.Entity<Task>()
                .Property(t => t.Name)
                .IsUnicode(true);

            modelBuilder.Entity<Task>()
                .Property(t => t.Description)
                .IsUnicode(true);

            modelBuilder.Entity<Task>()
                .HasRequired(c => c.Client)
                .WithMany(t => t.Tasks)
                .HasForeignKey(t => t.ClientId);
        }
    }
}