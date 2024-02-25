using ColetaBlu.DTO;
using ColetaBlu.Entity;


namespace ColetaBlu.Contracts_Repository
{
    public interface ICollectRepository
    {
        Task Add(CollectDTO collect);
        Task AddMultiple(IEnumerable<CollectDTO> collects);

        Task<IEnumerable<CollectEntity>> Read();
        Task<IEnumerable<CollectEntity>> ReadResidue();

    }
}
