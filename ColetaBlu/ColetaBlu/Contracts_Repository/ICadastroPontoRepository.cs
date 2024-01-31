using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public class ICadastroPontoRepository
    {
        public interface ICadastroPonto
        {
            Task Add(CadastroPontoDTO user);
            Task<IEnumerable<CadastroPontoEntity>> Read();
            Task Update(CadastroPontoDTO user);
            Task Delete(int id);

        }
    }
}
