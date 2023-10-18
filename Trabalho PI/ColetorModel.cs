using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Entity;

namespace Trabalho_PI
{
    public class ColetorModel: Icrud
    {
        private List<Coletor> coletores = new List<Coletor>();
        public Coletor coletor = new Coletor();

        public void Update()
        {
            // TODO: CHAMAAR Read();
            char confirmacao = ConfirmarAcao("editar");

            if (confirmacao == 'S')
            {

            }


        }
        private string ChangeValue(string informacao)
        {
            if (!string.IsNullOrEmpty(informacao))
            {
                Console.WriteLine($"Você deseja alterar esta informação: {informacao}? S/N");
                char resposta = Convert.ToChar(Console.ReadLine().ToUpper());
                if (resposta == 'S')
                {
                    Console.WriteLine("Digite a nova informação que deseja: ");
                    informacao = Console.ReadLine();
                }
            }
            else
            {
                informacao = Console.ReadLine();
            }
            return informacao;
        }
        public char ConfirmarAcao(string acao)
        {

            Console.WriteLine($"Você possui certeza que deseja {acao} seu perfil? \n Digite S para sim ou N para não.");

            char resposta = Convert.ToChar(Console.ReadLine().ToUpper());

            return resposta;
        }

        private ColetorEntity PopularColetor(ColetorEntity coletor)
        {
            //TODO: MUDAR PARA NOMES COLOCADO NO BANCO DE DADOS
            Console.Write("Digite o seu CPF/CNPJ = ");
            double resposta = Convert.ToDouble(Console.ReadLine());

            if (resposta == )
            coletor.CPF = ChangeValue(coletor.CPF);


            //usuario.USUARIO_ID = ChangeUsuario(usuario);
            return coletor;
        }
        public void Create()
        {
            ColetorEntity coletor = new ColetorEntity();
            coletor = PopularColetor(coletor);
            //TODO: MUDAR PARA NOMES COLOCADO NO BANCO DE DADOS
            //string sql = "INSERT INTO COLETOR VALUE (NULL, @, @, @)";
            //int linhas = this.Execute(sql, coletor);
        }

        public void Delete()
        {
            Console.WriteLine("Você possui certeza que deseja excluir seu perfil?");
            int resposta = Convert.ToInt32(Console.ReadLine());

            if (resposta.Equals("sim"))
            {
                //coletores.RemoveAt(nomeUsuario);
                //TODO: chamar a função que loga;
            }
            else
            {
                // TODO: chamar menu perfil;
            }
        }

        public void Read()
        {
            //Revisar
            Coletor coletor = new Coletor();
            coletor.PopularColetor();
            coletores.Add(coletor);
        }
    }
}

