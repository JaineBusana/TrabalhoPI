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
            ResiduoModel residuoModel = new ResiduoModel();
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            
            residuo.Delete();
            
=======
<<<<<<< HEAD
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
=======
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            residuo.Create();
            residuo.Read();
>>>>>>> 1698013b561a4fc2556bc9ba710ead92d81bd1ee
>>>>>>> ee7029bb14e20dab9be06b2966545d39634036d7
        }
    }
}