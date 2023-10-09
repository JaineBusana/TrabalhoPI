using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class Usuario : Ipl
    {
        public string Nome { get; set; }
        public char Sexo { get; set; }
        public string DataNascimento { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string NomeUsuario { get; set; }
        public string Senha { get; set; }

        public static void Popular()
        {
            EditarNome();
            EditarDataNascimento();
            EditarSexo();
            EditarTelefone();
            EditarEmail();
            EditarNomeUsuario();
            EditarSenha();
        }

        public static void Listar()
        {
            Console.WriteLine($"Nome: {Nome}");
            Console.WriteLine($"Sexo: {Sexo}");
            Console.WriteLine($"Data de Nascimento: {DataNascimento}");
            Console.WriteLine($"Telefone: {Telefone}");
            Console.WriteLine($"E-mail: {Email}");
            Console.WriteLine($"Usuário: {NomeUsuario}");
        }
        public static void EditarNome()
        {
            Console.WriteLine("Digite seu nome completo:");
            Nome = Console.ReadLine();
        }
        public static void EditarDataNascimento()
        {
            Console.WriteLine("Digite sua data de nascimento:");
            DataNascimento = Console.ReadLine();
        }
        public static void EditarSexo()
        {
            Console.WriteLine("Digite o sexo: M ou F.");
            Sexo = Convert.ToChar(Console.ReadLine());
        }
        public static void EditarTelefone()
        {
            Console.WriteLine("Digite seu telefone com o DDD:");
            Telefone = Console.ReadLine();
        }
        public static void EditarEmail()
        {
            Console.WriteLine("Digite o seu e-mail:");
            Email = Console.ReadLine();
        }
        public static void EditarNomeUsuario()
        {
            Console.WriteLine("Digite o usuário (como deseja ser chamado):");
            NomeUsuario = Console.ReadLine();
        }
        public static void EditarSenha(string mensagem = "")
        {
            Console.WriteLine("Digite uma senha com 6 digitos: ");
            string primeiraSenha = Console.ReadLine();
            Console.WriteLine("Digite novamente: ");
            string segundaSenha = Console.ReadLine();
            if (primeiraSenha == segundaSenha)
            {
                Senha = primeiraSenha;
            }
            else
            {
                EditarSenha("As senhas devem ser iguais, tente novamente!\n");
            }
        }
    }
}
