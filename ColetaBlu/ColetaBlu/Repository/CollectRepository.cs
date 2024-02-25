using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Infrastructure;
using ColetaBlu.Entity;
using Dapper;


namespace ColetaBlu.Repository
{
    public class CollectRepository : Connection, ICollectRepository
    {

        public async Task Add(CollectDTO collect)
        {
            string sql = @"
                INSERT INTO COLLECT (SocialNumber, Quantity, User_Id, CollectResidue_CollectionPoint_Id, CollectResidue_Residue_Id)
                            VALUE (@SocialNumber, @Quantity, @User_Id, @CollectResidue_CollectionPoint_Id, @CollectResidue_Residue_Id)
            ";
            await Execute(sql, collect);
        }

        public async Task AddMultiple(IEnumerable<CollectDTO> collects)
        {
            foreach (var collect in collects)
            {
                await Add(collect);
            }
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
