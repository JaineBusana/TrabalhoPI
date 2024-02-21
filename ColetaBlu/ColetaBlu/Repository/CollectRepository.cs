using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Infrastructure;

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
    }
}
