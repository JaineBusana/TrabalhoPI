using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;

namespace ColetaBlu.Controller
{
    public class UserIdentifier : Connection
    {
        public async Task<UserEntity> GetTypeByid(int id, string Type)
        {
            string sql = "SELECT Type FROM User WHERE Id = @id";
            return await GetConnection().QueryFirstAsync<UserEntity>(sql, new { Type });
        }
    

    }

}
