using System.ComponentModel.DataAnnotations;

namespace AuthenticationTest.Models
{
    public class SignIn
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
