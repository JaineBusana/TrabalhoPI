using System;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Trabalho_PI.ConsoleHelpers
{
    public class Database
    {
        protected string conectionString = "Server=localhost;Database=trabalho_pi;User=root;Password=@Thiago01;";


        protected MySqlConnection GetConnection()
        {
            return new MySqlConnection(conectionString);
        }

        protected int Execute(string sql, object obj)
        {
            using (MySqlConnection conexao = GetConnection())
            {
                return conexao.Execute(sql, obj);
            }
        }
    }
}
