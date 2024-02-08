using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PontoColetaController : ControllerBase
    {
        private readonly BD _context;
// FALTA MUDAR BD PARA O BANCO DE DADOS
        public PontoColetaController(BD context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get(string neighborhood, string residue)
        {
            var pontoColeta = _context.PontoColeta.FirstOrDefault(p => p.Neighborhood == neighborhood && p.Residue == residue);

            if (pontoColeta == null)
            {
                return NotFound(); 
            }
            return Ok(pontoColeta);
        }
    }
}