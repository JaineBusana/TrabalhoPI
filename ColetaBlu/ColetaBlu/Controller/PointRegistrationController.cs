using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using Microsoft.AspNetCore.Mvc;
using static ColetaBlu.Contracts_Repository.IPointRegistrationRepository;

namespace ColetaBlu.Controller
{
    [ApiController]
    [Route("/cadastroponto")]
    public class PointRegistrationController : ControllerBase
    {
        private readonly IPointRegistrationRepository _cadastroPontoRepository;
        public PointRegistrationController(IPointRegistrationRepository cadastroPontoRepository)
        {
            _cadastroPontoRepository = cadastroPontoRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Add(PointRegistrationDTO cadastroPonto)
        {
            await _cadastroPontoRepository.Add(cadastroPonto);
            return Ok(cadastroPonto);
        }

    }
}


