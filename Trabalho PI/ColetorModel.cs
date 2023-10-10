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


        public void Atualizar()
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

                        break;
                    case 2:

                        break;
                    case 3:

                        break;
                    case 4:

                        break;
                    case 5:

                        break;
                    case 6:

                        break;
                }
            }
            else if (resp.Equals("coletor"))
            {

                Console.WriteLine("\n1-CPF/CNPJ \n2-Endereço \n3-Forma de coleta \n4-Descrição \n5- Senha " +
                    "\n6-Todos os campos descritos acima.");
                int resposta2 = Convert.ToInt32(Console.ReadLine());
            
                switch (resposta2)
                {
                    case 1:
                        Coletor.EditarCPFeCNPJ();
                        break;
                    case 2:

                        break;
                    case 3:

                        break;
                    case 4:

                        break;
                    case 5:

                        break;
                    case 6:

                        break;
                }
            }
            else
            {
                Console.WriteLine("Opção inválida");
                Atualizar();
            }
        }

        public void Criar()
        {
            throw new NotImplementedException();
        }

        public void Deletar()
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

        public void Ler()
        {
            throw new NotImplementedException();
        }
    }
}

