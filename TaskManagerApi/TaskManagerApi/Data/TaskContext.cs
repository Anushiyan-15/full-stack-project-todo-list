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
        


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            {
                modelBuilder.Entity<User>()
                    .HasOne(a => a.Address)
                    .WithOne(a => a.User)
                    .HasForeignKey<Address>(c => c.UserId)
                    .OnDelete(DeleteBehavior.Cascade);
                 

                modelBuilder.Entity<User>()
                    .HasMany(o=>o.Tasks)
                    .WithOne(o=>o.Assignee)
                    .HasForeignKey(f=>f.AssigneeId);

                modelBuilder.Entity<TaskItem>()
                    .HasMany(a => a.Checklists)
                    .WithOne(c => c.Task)
                    .HasForeignKey(c => c.TaskId);

                base.OnModelCreating(modelBuilder);
            }
        }
    }
}
