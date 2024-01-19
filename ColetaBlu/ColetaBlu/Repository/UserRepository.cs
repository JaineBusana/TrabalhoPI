using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Mysqlx.Prepare;
using Dapper;
namespace ColetaBlu.Repository
{
    internal class UserRepository : Connection, IUserRepository
    {
        public async Task Add(UserDTO user)
        {
            string sql = @"
          INSERT INTO User (Type, Name, CPF_CNPJ, Email, Telephone, Password, Score)
                         VALUE(@tYPE, @Name, @CPF_CNPJ, @Email, @Telephone, @Password, @Score)

         ";
            await Execute(sql, user);
        }
        public async Task Delete(int id)
        {
            string sql = "DELETE FROM User WHERE Id = @id";
            await Execute(sql, new { id });
        }
        public async Task<UserEntity> GetByEmail(string Email)
        {
            string sql = "SELECT * FROM User WHERE Id = @id";
            return await GetConnection().QueryFirstAsync<UserEntity>(sql, new { Email });
        }
        public async Task<IEnumerable<UserEntity>> Read()
        {
            string sql = "SELECT * FROM User";
            return await GetConnection().QueryAsync<UserEntity>(sql);
        }
        public async Task Update(UserEntity user)
        {
            string sql = @"
                     UPDATE User
                     SET Type = @Type,
                         Name = @Name,
                         CPF_CNPJ = @CPF_CNPJ,
                         Email = @Email,
                         Telephone = @Telephone,
                         Password = @Password,
                         Score = @Score
                     WHERE Id = @Id
            ";
            await Execute(sql, user);
        }

    }

}
