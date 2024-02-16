using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IPontoColetaRepository
    {
        Task<CollectionPointEntity> Get()
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<CollectionPointEntity>> Read();
    }

}