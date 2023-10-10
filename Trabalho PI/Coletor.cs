using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class Coletor : Usuario, Ipl
    {
        //A class Coletor herda do Usuario Nome, Telefone, Sexo, Data de Nascimento, e-mail, usuário e senha
        public static double CPF { get; set; }
        public static double CNPJ { get; set;}
        public static string endereco { get; set; }
        public static string formaDaColeta { get; set; }
        public static string descricao { get; set; }

        public static void Popular()
        {  
            EditarCPFeCNPJ();
            EditarEndereco();
            EditarFormaDaColeta();
            EditarDescricao();
            Console.WriteLine("Coletor cadastrado!");
        }
        public static void EditarCPFeCNPJ()
        {
            Console.WriteLine("Deseja realizar o cadastro como Pessoa Física ou Jurídica (1 = Física, 2 = Jurídica)");
            int respTipoPessoa = Convert.ToInt32(Console.ReadLine());
            if (respTipoPessoa == 1)
            {
                Console.Write("Digite o seu CPF = ");
                CPF = Convert.ToDouble(Console.ReadLine());
            }
            else if (respTipoPessoa == 2)
            {
                Console.Write("Digite o seu CNPJ = ");
                CNPJ = Convert.ToDouble(Console.ReadLine());
            }
            else 
            {
                Console.Clear();
                Console.WriteLine("Resposta invalida! ");
                Console.WriteLine();
                Popular();
            }
        }

        public static void EditarEndereco()
        {
            Console.Write("Digite o seu Endereço = ");
            endereco = Console.ReadLine();
        }
        public static void EditarFormaDaColeta()
        {
            Console.Write("Digite a forma de coleta = ");
            formaDaColeta = Console.ReadLine();
        }
        public static void EditarDescricao()
        {
            Console.Write("Digite uma descrição = ");
            descricao = Console.ReadLine();
        }

        public static void Listar()
        {
            Console.WriteLine($"CPF {CPF}");
            Console.WriteLine($"Enderço {endereco}");
            Console.WriteLine($"Forma da Coleta {formaDaColeta}");
            Console.WriteLine($"Descrição {descricao}");
        }
    }
}

/*Console.WriteLine("Deseja realizar o cadastro como Pessoa Física ou Jurídica (1 = Física, 2 = Jurídica)");
            int respTipoPessoa = Convert.ToInt32(Console.ReadLine());
            if (respTipoPessoa == 1)
            {
                Console.Write("Digite o seu CPF = ");
                CPF = Convert.ToDouble(Console.ReadLine());
            }
            if (respTipoPessoa == 2)
            {
                Console.Write("Digite o seu CNPJ = ");
                CNPJ = Convert.ToDouble(Console.ReadLine());
            }
            Console.Write("Digite o seu Endereço = ");
            endereco = Console.ReadLine();
            Console.Write("Digite a forma de coleta = ");
            formaDaColeta = Console.ReadLine();
            Console.Write("Digite uma descrição = ");
            descricao = Console.ReadLine();
            Console.WriteLine("Coletor cadastrado!");
            if (respTipoPessoa != 1 && respTipoPessoa != 2)*/
