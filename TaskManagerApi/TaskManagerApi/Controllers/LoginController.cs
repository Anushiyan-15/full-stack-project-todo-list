using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManagerApi.Data;
using TaskManagerApi.Dtos;
using TaskManagerApi.Models;

namespace TaskManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private TaskContext _taskContext;

        public LoginController(TaskContext taskContext)
        {
            _taskContext = taskContext;
        }


        [HttpPost("Register")]
        public async Task<IActionResult>Register(UserModel userModel)
        {
            try
            {
                var UserReq = new UserLogin
                {
                    FullName=userModel.FullName,
                    Email=userModel.Email,
                   PasswordHash=BCrypt.Net.BCrypt.HashPassword(userModel.Password),
                    Role=userModel.Role,

                   
                };

                var data = await _taskContext.UsersLogin.AddAsync(UserReq);

                await _taskContext.SaveChangesAsync();

                var responce = new UserModel
                {
                    UserId=data.Entity.UserId,
                    FullName=data.Entity.FullName,
                    Email=data.Entity.Email,
                    Role=userModel.Role,
                    
                    
                };

                return Ok(responce);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[HttpPost("Login-page")]

    }
}
