using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;

namespace ColetaBlu.Repository
{
    public class CadastroPontoRepository : Connection, ICadastroPontoRepository
    {

        public  async Task Add(CadastroPontoDTO cadastroPonto)
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

        public Task<IEnumerable<CadastroPontoEntity>> Read()
        {
           
        }

        public Task Update(CadastroPontoDTO user)
        {
            throw new NotImplementedException();
        }
    }
}
