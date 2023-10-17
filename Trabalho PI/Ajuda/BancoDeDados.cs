using Dapper;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI.Helpers
{
    public class BancoDeDados
    {
        protected string conexaoString = "Server=localhost;Database=nomeAdefinir;User=root;Password=root";

        protected MySqlConnection GetConnetion()
        {
            return new MySqlConnection(conexaoString);
        }

        protected int Execute(string sql, object obj)
        {
            using (MySqlConnection conexao = GetConnetion())
            {
                return conexao.Execute(sql, obj);
            }
        }

    }
}
