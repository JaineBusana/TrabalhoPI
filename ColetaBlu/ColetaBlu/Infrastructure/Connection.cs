using Dapper;
using MySql.Data.MySqlClient;

namespace ColetaBlu.Infrastructure
{
    public class Connection
    {
        protected string connectionString = "Server=localhost;DataBase=coleta_blu;User=root;Password=";
       
        protected MySqlConnection GetConnection()
        {
         return new MySqlConnection(connectionString);
        }
        protected async Task<int> Execute(string sql, object obj)
        {
         using (MySqlConnection con = GetConnection())
            {
                return await con.ExecuteAsync(sql, obj);
            }
        }
    }
}
