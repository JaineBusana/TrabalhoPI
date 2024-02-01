using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using Microsoft.AspNetCore.Mvc;
using static ColetaBlu.Contracts_Repository.ICadastroPontoRepository;

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

    }
}
