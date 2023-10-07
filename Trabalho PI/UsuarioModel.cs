using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class UsuarioModel: Icrud
    {
        private List<Usuario> usuarios = new List<Usuario>();

        // usar o nome listarUsuario para READ? qq coisa muda

        public void listarUsuario() //Read();
        {

        }
    
        public void alterarUsuario()
        {
            //listarUsuario();
            Console.WriteLine("Digite o número do item a ser alterado:");
            int indice = Convert.ToInt32(Console.ReadLine());
            if (indice > 0 && indice < usuarios.Count)
            {
                usuarios[indice].Popular();
            }
            else { Console.WriteLine($"Gentileza inserir um número entre 0 e {usuarios.Count}.");}
        }

        public void removerUsuario()
        {
            //listarUsuario();
            Console.WriteLine("Digite o número do item a ser excluído:");
            int id = Convert.ToInt32(Console.ReadLine());
            if (id > 0 && id < usuarios.Count)
            {
                Console.WriteLine("Você tem certeza que deseja excluir sua conta? Digite sim ou não:");
                string confirmacao = Console.ReadLine();
                if (confirmacao.ToLower().Equals("sim"))
                {
                    usuarios.RemoveAt(id);
                }
                else if (confirmacao.ToLower().Equals("não"))
                {
                    // VOLTAR PARA O MENU
                }
            }
            else { Console.WriteLine($"Gentileza inserir um número entre 0 e {usuarios.Count}."); }
        }
    }
}
