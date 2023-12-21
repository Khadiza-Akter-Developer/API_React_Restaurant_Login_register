using AuthenticationTest.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationTest.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        { 
        
        }
        public DbSet<SignUp> SignUps { get; set; }
        public DbSet<SignIn> SignIns { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SignUp>().ToTable("SignUps").HasKey(k => k.Id);
            modelBuilder.Entity<SignIn>().ToTable("SignIns").HasKey(k => k.Id);
        }

    }
}
