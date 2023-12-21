using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using AuthenticationTest.Models;
using AuthenticationTest.Context;

namespace AuthenticationTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public AuthController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("Register")]
        public IActionResult Post([FromBody] SignUp signUp)
        {
            if (signUp == null)
            {
                return BadRequest("Invalid data");
            }

            // Validation
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _dbContext.SignUps.Add(signUp);
                _dbContext.SaveChanges();

                return Ok("User registered successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] SignIn signIn)
        {
            if (signIn == null)
            {
                return BadRequest("Invalid data");
            }

            // Validation
            if (string.IsNullOrWhiteSpace(signIn.Username) || string.IsNullOrWhiteSpace(signIn.Password))
            {
                return BadRequest("Username and password are required.");
            }

            try
            {
                var signUp = _dbContext.SignUps
                    .FirstOrDefault(u => u.Username == signIn.Username && u.Password == signIn.Password);

                if (signUp == null)
                {
                    return BadRequest("Invalid username or password.");
                }

                return Ok("Login successful");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
    }
}
