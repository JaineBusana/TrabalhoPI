using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
<<<<<<< HEAD
using Trabalho_PI.Helpers;
=======
using Trabalho_PI.Entity;
<<<<<<< HEAD
using Trabalho_PI.Helpers;

namespace Trabalho_PI
{
    public class UsuarioModel: BancoDeDados, Icrud
=======
>>>>>>> 086258c599f460bd9b88a713d65ef0500ed457b6

namespace Trabalho_PI
{
    public class UsuarioModel: BancoDeDados,Icrud
>>>>>>> main
    {
        private List<Usuario> usuarios = new List<Usuario>();

        private UsuarioEntity PopularUsuario(UsuarioEntity usuario)
        {
            //TODO: MUDAR PARA NOMES COLOCADO NO BANCO DE DADOS
            //Console.WriteLine("Digite seu nome completo:");
            //usuario.Nome = ChangeValue(usuario.Nome);
            //Console.WriteLine("Digite sua data de nascimento:");
            //usuario.DataNascimento = ChangeValue(usuario.DataNascimento);
            //Console.WriteLine("Digite o sexo: M ou F.");
            //usuario.Sexo = ChangeValue(usuario.Sexo);
            //Console.WriteLine("Digite seu telefone com o DDD:");
            //usuario.Telefone = ChangeValue(usuario.Telefone);
            //Console.WriteLine("Digite o seu e-mail:");
            //usuario.Email = ChangeValue(usuario.Email);
            //Console.WriteLine("Digite o usuário (como deseja ser chamado):");
            //usuario.NomeUsuario = ChangeValue(usuario.NomeUsuario);

            //usuario.USUARIO_ID = ChangeUsuario(usuario);
            return usuario;
        }
    

        public void Create()
        {
            UsuarioEntity usuario = new UsuarioEntity();
            usuario = PopularUsuario(usuario);
            //TODO: MUDAR PARA NOMES COLOCADO NO BANCO DE DADOS
            //string sql = "INSERT INTO USUARIO VALUE (NULL, @, @, @)";
            //int linhas = this.Execute(sql, usuario);
        }

        private IEnumerable<UsuarioEntity> ListUsuarioEntity()
        {
            string sql = "SELECT * FROM USUARIO";
            return this.GetConnetion().Query<UsuarioEntity>(sql)

        }

        public void Read()
        {
<<<<<<< HEAD
            // TODO
=======
            foreach (var dado in ListUsuarioEntity())
>>>>>>> main
        }
    
        public void Update()
        {
            // TODO: CHAMAAR Read();
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
