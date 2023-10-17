using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Helpers;

namespace Trabalho_PI
{
    public class UsuarioModel: BancoDeDados,Icrud
    {
        private List<Usuario> usuarios = new List<Usuario>();

        public void Create()
        {
            Usuario usuario = new Usuario();
            usuario.PopularUsuario();
            usuarios.Add(usuario);
        }

        private IEnumerable<UsuarioEntity> ListUsuarioEntity()
        {
            string sql = "SELECT * FROM USUARIO";
            return this.GetConnetion().Query<UsuarioEntity>(sql)

        }

        public void Read()
        {
            foreach (var dado in ListUsuarioEntity())
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

            Console.WriteLine($"Você tem certeza que deseja {acao} seu perfil? \n Digite S para sim ou N para não.");

            char resposta = Convert.ToChar(Console.ReadLine().ToUpper());

            return resposta;
            
        }
        public void Delete()
        {
        }
    }
}
