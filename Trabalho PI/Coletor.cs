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
        public double CPF { get; set; }
        public double CNPJ { get; set;}
        public string endereco { get; set; }
        public string formaDaColeta { get; set; }
        public string descricao { get; set; }

        public void Popular()
        {  
            EditarCPFeCNPJ();
            EditarEndereco();
            EditarFormaDaColeta();
            EditarDescricao();
            Console.WriteLine("Coletor cadastrado!");
        }
        public void EditarCPFeCNPJ()
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

        public void EditarEndereco()
        {
            Console.Write("Digite o seu Endereço = ");
            endereco = Console.ReadLine();
        }
        public void EditarFormaDaColeta()
        {
            Console.Write("Digite a forma de coleta = ");
            formaDaColeta = Console.ReadLine();
        }
        public void EditarDescricao()
        {
            Console.Write("Digite uma descrição = ");
            descricao = Console.ReadLine();
        }

        public void Listar()
        {
            Console.WriteLine($"CPF {CPF}");
            Console.WriteLine($"Enderço {endereco}");
            Console.WriteLine($"Forma da Coleta {formaDaColeta}");
            Console.WriteLine($"Descrição {descricao}");
        }

    }
}