using ColetaBlu.Contracts_Repository;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{
        [ApiController]
    [Route("cadastroponto")]
    public class CadastroPontoController : ControllerBase
    {
        private readonly ICadastroPontoRepository _cadastroPontoRepository;
        public CadastroPontoController(ICadastroPontoRepository cadastroPontoRepository)
        {
            _cadastroPontoRepository = cadastroPontoRepository;
        }

        [HttpGet("{id}")]
    }
}
