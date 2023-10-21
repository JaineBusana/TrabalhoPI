using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Model;

namespace Trabalho_PI.ConsoleHelpers
{
    public class Menu
    {
        private ResiduoModel _residuoModel = new ResiduoModel();
        private CategoriaResiduoModel _categoriaResiduoModel = new CategoriaResiduoModel();

        public void MostrarMenuPrincipal()
        {
            switch (MenuPricipal())
            {
                case 1:
                    MostrarMenuCrud(_residuoModel);
                    break;
                case 2:
                    MostrarMenuCrud(_categoriaResiduoModel);
                    break;
                default:
                    Console.WriteLine("Opção invalida!");
                    Console.ReadLine();
                    break;
            }
        }


        public void MostrarMenuCrud(ICrud crud)
        {
            switch (MenuCrud())
            {
                case 1:
                    crud.Read();
                    break;
                case 2:
                    crud.Create();
                    break;
                case 3:
                    crud.Update();
                    break;
                case 4:
                    crud.Delete();
                    break;
                case 0:
                    MostrarMenuPrincipal();
                    break;
                default:
                    Console.WriteLine("Opção invalida, precione uma tecla para continuar");
                    Console.ReadLine();
                    MostrarMenuCrud(crud);
                    break;
            }
        }
        public int MenuPricipal()
        {
            Console.Clear();

            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine(" --  Seja bem-vindo ao ColetaBlu  -- ");
            Console.ResetColor();
            Console.WriteLine("\nDigite a opção que deseja:");
            Console.WriteLine("1 - Residuo");
            Console.WriteLine("2 - Categoria Residuo");
            return Convert.ToInt32(Console.ReadLine());
        }
        public int MenuCrud()
        {
            Console.Clear();

            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.WriteLine("    --  ColetaBlu  --  ");
            Console.ResetColor();
            Console.WriteLine("\nDigite a opção que deseja:");
            Console.WriteLine("1 - Visualizar");
            Console.WriteLine("2 - Cadastrar");
            Console.WriteLine("3 - Editar");
            Console.WriteLine("4 - Excluir");
            Console.WriteLine("0 - Rertornar");
            return Convert.ToInt32(Console.ReadLine());
        }

    }
}

