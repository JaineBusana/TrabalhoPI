using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    internal class Usuario
    {
        public string Nome { get; set; }
        public char Sexo { get; set; }
        public string DataNascimento { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string NomeUsuario { get; set; }
        public string Senha { get; set; }


        public void Popular()
        {
            Console.WriteLine("Digite seu nome completo:");
            Nome = Console.ReadLine();

            Console.WriteLine("Digite o sexo: M ou F.");
            Sexo = Convert.ToChar(Console.ReadLine());

            Console.WriteLine("Digite sua data de nascimento:");
            DataNascimento = Console.ReadLine();

            Console.WriteLine("Digite seu telefone com o DDD:");
            Telefone = Console.ReadLine();

            Console.WriteLine("Digite o e-mail do cliente");
            Email = Console.ReadLine();

            Console.WriteLine("Digite o usuário (como deseja ser chamado): ");
            NomeUsuario = Console.ReadLine();

            Console.WriteLine("Digite a senha: ");
            Senha = Console.ReadLine();
        }
    }
}
