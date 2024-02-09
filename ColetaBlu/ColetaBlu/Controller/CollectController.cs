using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{

        [ApiController]
        [Route("/collect")]
        public class CollectController : ControllerBase
        {
            private readonly ICollectRepository _collectRepository;
            public CollectController(ICollectRepository collectRepository)
            {
                _collectRepository = collectRepository;
            }

        [HttpPost]
        public async Task<IActionResult> Add(CollectDTO user)
        {
            await _collectRepository.Add(user);
            return Ok();
        }





    }
 
}
