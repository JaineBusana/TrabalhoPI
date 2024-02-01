using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{

    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _userRepository.Read());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string Email)
        {
            return Ok(await _userRepository.GetByEmail(Email));
        }

        [HttpPost]
        public async Task<IActionResult> Add(UserDTO user)
        {
            await _userRepository.Add(user);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update(UserEntity user)
        {
            await _userRepository.Update(user);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            await _userRepository.Delete(id);
            return Ok();
        }

    }
}



