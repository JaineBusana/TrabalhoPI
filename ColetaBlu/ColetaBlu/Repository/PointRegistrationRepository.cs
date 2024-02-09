using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;

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

        public Task<IEnumerable<PointRegistration>> Read()
        {
            throw new NotImplementedException();
        }

        public Task Update(PointRegistrationDTO user)
        {
            throw new NotImplementedException();
        }
    }
}
