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
            Console.WriteLine("Qual campo você deseja editar: \n1-Nome \n2-Telefone " +
                "\n3-Sexo \n4-Data de nascimento \n5-E-mail \n6-CPF/CNPJ \n7-Endereço " +
                "\n8-Forma de coleta \n9-Descrição \n10-Todos os campos descritos acima."); 
            int resposta = Convert.ToInt32(Console.ReadLine());

            switch (resposta)
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
                    Coletor.EditarCPFeCNPJ();
                    break;
                case 7:

                    break;
                case 8:

                    break;
                case 9:

                    break;
                case 10:
                    break;
            }

           }

        public void Deletar()
        {
            Console.WriteLine("Você possui certeza que deseja excluir seu perfil?");
            int resposta = Convert.ToInt32(Console.ReadLine());

            if (resposta.Equals("sim"))
            {
                coletores.RemoveAt(nomeUsuario);
                //TODO: chamar a função que loga;
            }
            else
            {
                // TODO: chamar menu perfil;
            }
        }

    }
}

