using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Contracts.Repository;
using Trabalho_PI.Entity;

namespace Trabalho_PI.Repository
{
    internal class UserRepository : IUserRepository
    {
        public Task Add(UserDTO user)
        {
            string sql = @"
            INSERT INTO User (Type, Name, CPF_CNPJ, Email, Telephone, Password, Score)
                         VALUE(@Type, @Name, @CPF_CNPJ, @Email, @Telephone, @Passaword, @Score)
          ";
            await Execute(sql, user);
        }

        public Task Delete(int id)
        {
            string sql = "DELETE FROM User WHERE Id = @id";
            await Execute(sql, new { id });
        }

        public Task<UserEntity> GetByEmail(string Email)
        {
            string sql = "SELECT * FROM User WHERE Id = @id";
            return await GetConnection().QueryFirstAsync<UserEntity>(sql, new { Email });
        }

        public Task<IEnumerable<UserEntity>> Read()
        {
            string sql = "SELECT * FROM User";
            return await GetConnection().QueryAsync<UserEntity>(sql);
        }

        public Task Update(UserEntity user)
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
