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

       

       // HACK:
           public void Atualizar()
        {
            // TODO: CHAMAR READ
            int index = Convert.ToInt32(Console.ReadLine());
            //coletores[index].Popular();
        }

        public void Deletar()
        {
            // TODO: CHAMAR READ
            Console.WriteLine("Você possui certeza que deseja excluir seu perfil?");
            coletores.RemoveAt(nomeUsuario);
        }

    }
}

