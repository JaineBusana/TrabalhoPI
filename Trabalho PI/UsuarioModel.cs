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

        public void Create()
        {
            Usuario usuario = new Usuario();
            usuario.PopularUsuario();
            usuarios.Add(usuario);
        }

        public void Read()
        {
            //como fazer sem lista? como saber qual usuario esta logado?
            for (int i = 0; i < usuarios.Count; i++)
            {
                usuarios[i].ListarUsuario();
            }
        }
    
        public void Update()
        {
            char confirmacao = ConfirmarAcao("editar");

            if (confirmacao == 'S')
            {

            }


        }

        public char ConfirmarAcao(string acao)
        {

            Console.WriteLine($"Você possui certeza que deseja {acao} seu perfil? \n Digite S para sim ou N para não.");

            char resposta = Convert.ToChar(Console.ReadLine().ToUpper());

            return resposta;
            
        }
        public void Delete()
        {
        }
    }
}
