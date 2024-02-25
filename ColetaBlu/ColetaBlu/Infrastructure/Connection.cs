using Dapper;
using MySql.Data.MySqlClient;

namespace ColetaBlu.Infrastructure
{
    public class Connection
    {
<<<<<<< HEAD

        protected string connectionString = "Server=localhost;DataBase=coleta_blu;User=root;Password=root0512";

=======
        protected string connectionString = "Server=localhost;DataBase=coleta_blu;User=root;Password=@Thiago01";
       
>>>>>>> 0e3fbd415c95719525930d04247dda910cee393b
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
