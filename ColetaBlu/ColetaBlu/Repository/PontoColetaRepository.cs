using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;

namespace ColetaBlu.Repository
{
    public class PontoColetaRepository : Connection, IPontoColetaRepository
    {
        public async Task<IEnumerable<CollectionPointEntity>> Get()
        {
            string sql = "SELECT * FROM CollectionPoint";
            return await GetConnection().QueryAsync<CollectionPointEntity>(sql);

        }

        public async Task<IEnumerable<CollectionPointEntity>> Read()
        {
            string sql = "SELECT cp.Name as 'Local', n.Name as 'Bairro', GROUP_CONCAT(r.Name) as Name, cp.Street, cp.Number \r\nFROM collectionpoint cp \r\nJOIN neighborhood n on n.Id = cp.Neighborhood_Id \r\nJOIN collectresidue cr on cr.collectionpoint_Id = cp.Id \r\nJOIN residue r on r.Id = cr.residue_Id\r\nGROUP BY cp.id";
            Console.WriteLine("1");
            var retorno = await GetConnection().QueryAsync<CollectionPointEntity>(sql);
            Console.WriteLine(retorno);
            return retorno;
        }

        public async Task<IEnumerable<CollectionPointEntity>> ReadByUserEmail(string email)
        {
            string sql = "SELECT cp.Id, cp.Name FROM collectionpoint cp JOIN user u ON u.Id = cp.User_Id AND u.Email = @email";
            var retorno = await GetConnection().QueryAsync<CollectionPointEntity>(sql, new { email });
            return retorno;
        }
    }
}

/*
SELECT cp*, n.Name AS Nome_Bairro
FROM CollectionPoint cp
JOIN Neighborhood n ON cp.Neighborhood_id = Neighborhood.Id
WHERE n.Name = 'Nome do Bairro';


SELECT *, Neighborhood.Name AS Nome_Bairro
FROM CollectionPoint 
JOIN Neighborhood ON CollectionPoint.Neighborhood_id = Neighborhood.Id
*/