using ColetaBlu.Contracts_Repository;
using ColetaBlu.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ColetaBlu.Controller
{
    [ApiController]
    [Route("/pontoColeta")]
    public class PontoColetaController : ControllerBase
    {
        private readonly IPontoColetaRepository _PontoColetaRepository;

        public PontoColetaController(IPontoColetaRepository pontoColetaRepository)
        {
            _PontoColetaRepository = pontoColetaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _PontoColetaRepository.Read());
        }
    }
}