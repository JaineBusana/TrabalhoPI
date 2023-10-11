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

        public void Criar()
        {
            Usuario usuario = new Usuario();
            usuario.PopularUsuario();
            usuarios.Add(usuario);
        }

        public void Ler()
        {
            //como fazer sem lista? como saber qual usuario esta logado?
            for (int i = 0; i < usuarios.Count; i++)
            {
                usuarios[i].ListarUsuario();
            }
        }
    
        public void Atualizar()
        {
            //listarUsuario();
            Console.WriteLine("Digite o número do item a ser alterado:");
            int indice = Convert.ToInt32(Console.ReadLine());
            if (indice > 0 && indice < usuarios.Count)
            {
                usuarios[indice].PopularUsuario();
            }
            else { Console.WriteLine($"Gentileza inserir um número entre 0 e {usuarios.Count}.");}
        }

        public void Deletar()
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
