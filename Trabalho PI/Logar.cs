using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Entity;
using Trabalho_PI.Helpers;

namespace Trabalho_PI
{
    public class Logar : BancoDeDados
    {
        
        public (string,string) Acesso()
        {
            Console.Write("Usuário: ");
            string usuario = Console.ReadLine();
            Console.Write("Senha: ");
            string senha = Console.ReadLine();
                return (usuario, senha);
        }

        public void Login()
        {
            VerifyLogin(Acesso());
        }

        public void VerifyLogin(string usuario, string senha)
        {
            string sql = "SELECT * FROM USUARIO WHERE USUARIO = @USUARIO";
            var parametro = new { USUARIO = usuario };


        }
    }
}
