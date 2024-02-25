using ColetaBlu.Contracts_Repository;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;

namespace ColetaBlu.Repository
{
    public class ResidueRepository : Connection, IResidueRepository
    {
        public async Task<IEnumerable<ResidueEntity>> ReadByUserEmailAndCollectionPoint(string email, int collectionPointId)
        {
            string sql = "SELECT r.Id, r.Name FROM residue r JOIN collectresidue cr ON cr.Residue_Id = r.Id JOIN collectionpoint cp ON cp.Id = cr.CollectionPoint_Id AND cp.Id = @collectionPointId JOIN user u ON u.Id = cp.User_Id AND u.Email = @email";
            return await GetConnection().QueryAsync<ResidueEntity>(sql, new { email, collectionPointId });
        }
    }
}
