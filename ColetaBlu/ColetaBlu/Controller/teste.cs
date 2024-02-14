using System;
using Dapper;
using Microsoft.AspNetCore.Components.Server.ProtectedBrowserStorage;
using MySql.Data.MySqlClient;

namespace ExemploSistemaAdministrador
{
    class Program 
    {
        static void Main(string[] args)
        {
            string connectionString = "Server=localhost;DataBase=Coleta_Blu;User=root;Password=root";

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();

                    // Consulta para verificar se o usuário é um administrador
                    string query = "SELECT isAdmin FROM Usuarios WHERE username = @username AND password = @password";
                    MySqlCommand command = new MySqlCommand(query, connection);
                    command.Parameters.AddWithValue("@username", "nome_de_usuario");
                    command.Parameters.AddWithValue("@password", "senha");

                    object result = command.ExecuteScalar();
                    if (result != null)
                    {
                        bool isAdmin = Convert.ToBoolean(result);
                        if (isAdmin)
                        {
                            Console.WriteLine("Usuário é um administrador.");
                        }
                        else
                        {
                            Console.WriteLine("Usuário não é um administrador.");
                        }
                    }
                    else
                    {
                        Console.WriteLine("Credenciais inválidas.");
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Erro: " + ex.Message);
                }
            }
        }
    }
}
