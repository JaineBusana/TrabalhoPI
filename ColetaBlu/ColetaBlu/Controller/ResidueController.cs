using ColetaBlu.Contracts_Repository;
using ColetaBlu.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{
    [ApiController]
    [Route("/residue")]
    public class ResidueController : ControllerBase
    {
        private readonly IResidueRepository _ResidueRepository;

        public ResidueController(IResidueRepository ResidueRepository)
        {
            _ResidueRepository = ResidueRepository;
        }

        [HttpGet]
        public async Task<IActionResult> ReadByUserEmailAndCollectionPoint(string email, int collectionPointId)
        {
            try
            {
                return Ok(await _ResidueRepository.ReadByUserEmailAndCollectionPoint(email, collectionPointId));
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
