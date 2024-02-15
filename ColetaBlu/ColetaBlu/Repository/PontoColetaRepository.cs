using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;

namespace ColetaBlu.Repository
{
    public async Task<IEnumerable<CollectionPointEntity>> Read(string neighborhood, string residue)
    {
        string sql = "SELECT * FROM CollectionPoint WHERE Neighborhood = @Neighborhood OR Residue = @Residue";
        return await GetConnection().QueryAsync<CollectionPointEntity>(sql, new { Neighborhood = neighborhood, Residue = residue });        
    }
}