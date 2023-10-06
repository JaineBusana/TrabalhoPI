using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class Coletor
    {
        //A class Coletor herda do Usuario Nome, Telefone, Sexo, Data de Nascimento, e-mail, usuário e senha
        public static double CPF { get; set; }
        public double CNPJ { get; set;}
        public string endereco { get; set; }
        public string formaDaColeta { get; set; }
        public string descricao { get; set; }

        private static List<Coletor> ListaColetor;

        public static void Poupular()
        {
            Coletor novoColetor = new Coletor();
            Console.WriteLine("Deseja realizar o cadastro como Pessoa Física ou Jurídica (1 = Física, 2 = Jurídica)");
            int respTipoPessoa = Convert.ToInt32(Console.ReadLine());
            if (respTipoPessoa == 1)
            {

            }
            if (respTipoPessoa == 2)
            {

            }
            Console.Write("Digite o seu CPF = ");
            Coletor.CPF = Convert.ToDouble(Console.ReadLine());
        }

    }
}
