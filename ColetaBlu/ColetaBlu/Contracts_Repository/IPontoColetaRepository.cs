using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IPontoColetaRepository
    {
        public Task<IEnumerable<CollectionPointEntity>> Read()
        {
            throw new NotImplementedException();
        }
    }

}