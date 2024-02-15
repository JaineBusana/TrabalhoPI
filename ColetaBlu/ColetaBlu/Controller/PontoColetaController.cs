using ColetaBlu.Contracts_Repository;
using ColetaBlu.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pontoColeta.Controller
{
    [ApiController]
    [Route("pontoColeta")]
    public class PontoColetaController : ControllerBase
    {
        private readonly IPontoColetaRepository _pontoColetaRepository;

        public PontoColetaController(IPontoColetaRepository pontoColetaRepository)
        {
            _pontoColetaRepository = pontoColetaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get(string neighborhood, string residue)
        {
            var pontosColeta = await _pontoColetaRepository.Read(); 
            var pontosFiltrados = pontosColeta
                .Where(p => p.Neighborhood_Id == neighborhood && p.Residue == residue)
                .ToList();

            if (pontosFiltrados.Count == 0)
            {
                return NotFound();
            }
            return Ok(pontosFiltrados);
        }
    }
}
