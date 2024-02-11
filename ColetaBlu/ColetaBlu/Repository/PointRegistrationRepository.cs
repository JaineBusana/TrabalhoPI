using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;

namespace ColetaBlu.Repository
{
    public class PointRegistrationRepository : Connection, IPointRegistrationRepository
    {

        public  async Task Add(PointRegistrationDTO cadastroPonto)
        {
            string sql = @"
                INSERT INTO CollectionPoint (Name, Street, Number, Neighborhood_Id, User_Id)
                            VALUE (@Name, @Street, @Number, @Neighborhood_Id, @User_Id)
            ";
            await Execute(sql, cadastroPonto);
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<PointRegistrationEntity>> Read()
        {
            string sql = "SELECT * FROM COLLECTIONPOINT";
            return await GetConnection().QueryAsync<PointRegistrationEntity>(sql);
        }
       
        public Task Update(PointRegistrationDTO user)
        {
            throw new NotImplementedException();
        }
        public async Task<PointRegistrationEntity> GetById(int id)
        {
            string sql = "SELECT * FROM COLLECTIONPOINT WHERE Id = @id";
            return await GetConnection().QueryFirstAsync<PointRegistrationEntity>(sql, new { id });
        }

        
    }
}
