using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class ColetorModel: Icrud
    {
        private List<Coletor> coletores = new List<Coletor>();
        public Coletor coletor = new Coletor();

        public void Update()
        {
            Console.WriteLine("Você deseja editar os dados de usuário ou coletor?");
            string resp = (Console.ReadLine());
            resp = resp.ToLower();

            if (resp.Equals("usuário"))
            {
                Console.WriteLine("Qual campo você deseja editar: \n1-Nome \n2-Telefone " +
                "\n3-Sexo \n4-Data de nascimento \n5-E-mail \n6-Todos os campos descritos acima");
                int resposta1 = Convert.ToInt32(Console.ReadLine());

                switch (resposta1)
                {
                    case 1:
                        coletor.EditarNome();
                        break;
                    case 2:
                        coletor.EditarTelefone();
                        break;
                    case 3:
                        coletor.EditarSexo();
                        break;
                    case 4:
                        coletor.EditarDataNascimento();
                        break;
                    case 5:
                        coletor.EditarEmail();
                        break;
                    case 6:
                        coletor.PopularUsuario();
                        break;
                }
            }
            else if (resp.Equals("coletor"))
            {

                Console.WriteLine("\n1-CPF/CNPJ \n2-Endereço \n3-Forma de coleta \n4-Descrição \n5-Todos os campos descritos acima.");
                int resposta2 = Convert.ToInt32(Console.ReadLine());
            
                switch (resposta2)
                {
                    case 1:
                        coletor.EditarCPFeCNPJ();
                        break;
                    case 2:
                        coletor.EditarEndereco();
                        break;
                    case 3:
                        coletor.EditarFormaDaColeta();
                        break;
                    case 4:
                        coletor.EditarDescricao();
                        break;
                    case 5:
                        coletor.PopularColetor();
                        break;
                }
            }
            else
            {
                Console.WriteLine("Opção inválida");
                Update();
            }
        }

        public void Create()
        {
            Coletor coletor = new Coletor();
            coletor.PopularColetor();
            coletores.Add(coletor);
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

