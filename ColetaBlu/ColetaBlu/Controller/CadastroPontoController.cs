using ColetaBlu.Contracts_Repository;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{
        [ApiController]
    public class CadastroPontoController : ControllerBase
    {
        private readonly ICadastroPontoRepository cadastroPontoRepository;
        public CadastroPontoController(ICadastroPontoRepository cadastroPontoRepository)
        {
            this.cadastroPontoRepository = cadastroPontoRepository;
        }
    }
}
