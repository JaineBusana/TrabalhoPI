using MySql.Data.MySqlClient;
using Trabalho_PI.ConsoleHelpers;
using Trabalho_PI.Model;

namespace Trabalho_PI
{
    internal class Program
    {
        static void Main(string[] args)
        {
<<<<<<< HEAD
=======

            ResiduoModel residuoModel = new ResiduoModel();
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            
            residuo.Delete();
            


>>>>>>> 089381b5258f1d3d8ce5366b7f402c3ec2ad38d7
            try
            {
            Menu menu = new Menu();
            menu.MostrarMenuPrincipal();

            }
            catch (MySqlException ex)
            {
                Console.WriteLine("Erro MySql");
                Console.WriteLine(ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro");
                Console.WriteLine(ex.Message);
            }
<<<<<<< HEAD
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            residuo.Create();
            residuo.Read();
=======

            
>>>>>>> 089381b5258f1d3d8ce5366b7f402c3ec2ad38d7
        }
    }
}