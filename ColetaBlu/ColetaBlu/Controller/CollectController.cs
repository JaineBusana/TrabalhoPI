using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ColetaBlu.Controller
{
    [ApiController]
    [Route("registroColeta")]
    public class CollectController : ControllerBase
    {
        private readonly ICollectRepository _collectRepository;

        public CollectController(ICollectRepository collectRepository)
        {
            _collectRepository = collectRepository;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add(CollectDTO collect)
        {
            try
            {
                await _collectRepository.Add(collect);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest($"Não foi possível registrar a coleta. Mensagem: {erro.Message}");
            }
        }
    }
}
