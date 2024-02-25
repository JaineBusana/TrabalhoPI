using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IResidueRepository
    {
        Task<IEnumerable<ResidueEntity>> ReadByUserEmailAndCollectionPoint(string email, int collectionPointId);
    }
}
