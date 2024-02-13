using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace pontoColeta.Controller
{
    [ApiController]
    [Route("pontoColeta")]
    public class PontoColetaController : ControllerBase
    {
        private readonly IPontoColetaRepository _pontoColetaRepository;//

        public PontoColetaController(IPontoColetaRepository pontoColetaRepository)
        {
            _pontoColetaRepository = pontoColetaRepository;
        }

        [HttpGet]
        public IActionResult Get(string neighborhood, string residue)
        {
            var pontosColeta = _pontoColetaRepository.Read()
                .Where(p => p.Neighborhood == neighborhood && p.Residue == residue)
                .ToList();

            if (pontosColeta.Count == 0)
            {
                return NotFound(); 
            }
            return Ok(pontosColeta);
        }
    }
}