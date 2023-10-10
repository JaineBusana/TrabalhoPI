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
        public static string DataNascimento { get; set; }
        public static string Telefone { get; set; }
        public static string Email { get; set; }
        public static string NomeUsuario { get; set; }
        public static string Senha { get; set; }

        public void Popular()
        {
            EditarNome();
            EditarDataNascimento();
            EditarSexo();
            EditarTelefone();
            Console.Clear();
            EditarEmail();
            EditarNomeUsuario();
            EditarSenha();
        }

        public void Listar()
        {
            Console.WriteLine($"Nome: {Nome}");
            Console.WriteLine($"Sexo: {Sexo}");
            Console.WriteLine($"Data de Nascimento: {DataNascimento}");
            Console.WriteLine($"Telefone: {Telefone}");
            Console.WriteLine($"E-mail: {Email}");
            Console.WriteLine($"Usuário: {NomeUsuario}");
        }
        public void EditarNome()
        {
            Console.WriteLine("Digite seu nome completo:");
            Nome = Console.ReadLine();
        }
        public void EditarDataNascimento()
        {
            Console.WriteLine("Digite sua data de nascimento:");
            DataNascimento = Console.ReadLine();
        }
        public void EditarSexo()
        {
            Console.WriteLine("Digite o sexo: M ou F.");
            Sexo = Convert.ToChar(Console.ReadLine());
        }
        public void EditarTelefone()
        {
            Console.WriteLine("Digite seu telefone com o DDD:");
            Telefone = Console.ReadLine();
        }
        public void EditarEmail()
        {
            Console.WriteLine("Digite o seu e-mail:");
            Email = Console.ReadLine();
        }
        public void EditarNomeUsuario()
        {
            Console.WriteLine("Digite o usuário (como deseja ser chamado):");
            NomeUsuario = Console.ReadLine();
        }
        public void EditarSenha(string mensagem = "")
        {
            Console.Write(mensagem);
            Console.WriteLine("Digite uma senha com 6 digitos: ");
            string primeiraSenha = Console.ReadLine();
            if (primeiraSenha.Length != 6)
            {
                EditarSenha("\nA senha precisa ter 6 dígitos, tente novamente!\n");
            }
            else
            {
            Console.WriteLine("Digite novamente: ");
            string segundaSenha = Console.ReadLine();
            if (primeiraSenha == segundaSenha)
            {
                Senha = primeiraSenha;
            }
            else
            {
                EditarSenha("\nAs senhas devem ser iguais, tente novamente!\n");
            }
            }
        }
    }
}
