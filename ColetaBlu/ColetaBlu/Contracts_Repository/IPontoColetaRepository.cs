using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IPontoColetaRepository
    {
        Task<IEnumerable<CollectionPointEntity>> Read();
    }

}