using ColetaBlu.DTO;

namespace ColetaBlu.Contracts_Repository
{
    public interface ICollectRepository
    {
        Task Add(CollectDTO collect);
    }
}
