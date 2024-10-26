using Microsoft.EntityFrameworkCore;
using TaskManagerApi.Models;

namespace TaskManagerApi.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; } 
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Address { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            {
                modelBuilder.Entity<User>()
                    .HasOne(a => a.Address)
                    .WithOne(a => a.User)
                    .HasForeignKey<Address>(c => c.UserId);

                    base.OnModelCreating(modelBuilder);
            }
        }
    }
}
