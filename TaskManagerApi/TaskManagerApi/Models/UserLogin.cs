using Microsoft.AspNetCore.SignalR;
using System.ComponentModel.DataAnnotations;
using TaskManagerApi.Dtos;

namespace TaskManagerApi.Models
{
    public class UserLogin
    {
        [Key]
        public Guid ?UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public Roles? Role { get; set; }
 
    }
}
