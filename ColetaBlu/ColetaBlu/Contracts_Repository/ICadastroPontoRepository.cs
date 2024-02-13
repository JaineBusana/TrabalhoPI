using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{

    
        public interface ICadastroPontoRepository
        {
            Task Add(CadastroPontoDTO user);
            Task<IEnumerable<CadastroPontoEntity>> Read();
            Task Update(CadastroPontoDTO user);
            Task Delete(int id);
            

        }
    
}
