//using ColetaBlu.Contracts_Repository;
//using ColetaBlu.DTO;
//using Microsoft.AspNetCore.Mvc;
//using static ColetaBlu.Contracts_Repository.ICadastroPontoRepository;

//namespace ColetaBlu.Controller
//{
//    [ApiController]
//    [Route("/cadastroponto")]
//    public class CadastroPontoController : ControllerBase
//    {
//        private readonly ICadastroPontoRepository _cadastroPontoRepository;
//        public CadastroPontoController(ICadastroPontoRepository cadastroPontoRepository)
//        {
//            _cadastroPontoRepository = cadastroPontoRepository;
//        }

//        [HttpPost]
//        public async Task<IActionResult> Add(CadastroPontoDTO cadastroPonto)
//        {
//            await _cadastroPontoRepository.Add(cadastroPonto);
//            return Ok(cadastroPonto);
//        }


//    }
//}


