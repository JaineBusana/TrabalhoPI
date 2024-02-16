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
            string sql = "SELECT n.Name as 'Bairro', r.Name, cp.Street, cp.Number FROM collectionpoint cp JOIN neighborhood n on n.Id = cp.Neighborhood_Id JOIN collectresidue cr on cr.collectionpoint_Id = cp.Id JOIN residue r on r.Id = cr.residue_Id";
            Console.WriteLine("1");
            var retorno = await GetConnection().QueryAsync<CollectionPointEntity>(sql);
            Console.WriteLine(retorno);
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