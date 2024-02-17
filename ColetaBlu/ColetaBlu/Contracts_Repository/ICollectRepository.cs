using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface ICollectRepository
    {
        Task Add(CollectDTO collect);
        Task<IEnumerable<CollectEntity>> Read();
        Task<IEnumerable<CollectEntity>> ReadResidue();
    }
}
