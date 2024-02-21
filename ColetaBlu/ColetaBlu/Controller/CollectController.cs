using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        [HttpPost]
        [Route("addMultiple")]
        public async Task<IActionResult> AddMultiple(IEnumerable<CollectDTO> collects)
        {
            try
            {
                await _collectRepository.AddMultiple(collects);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest($"Não foi possível registrar a coleta. Mensagem: {erro.Message}");
            }
        }
    }
}
