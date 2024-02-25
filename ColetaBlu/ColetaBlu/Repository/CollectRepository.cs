using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;

namespace ColetaBlu.Repository
{
    public class CollectRepository : Connection, ICollectRepository
    {
        public Task Add(CollectDTO collect)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CollectEntity>> Read()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CollectEntity>> ReadResidue()
        {
            string sql = @"SELECT r.name FROM collect c
                        join collectresidue cr
                        on cr.Residue_Id = c.CollectResidue_Residue_Id
                        join residue r
                        on r.Id = cr.Residue_Id";
            return await GetConnection().QueryAsync<CollectEntity>(sql);
        }
    }
}
