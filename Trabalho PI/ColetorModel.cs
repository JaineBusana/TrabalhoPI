using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    public class ColetorModel
    {
            private List<Coletor> coletores = new List<Coletor>();

       

       // HACK:
           public void Update()
        {
            // TODO: CHAMAR READ
            int index = Convert.ToInt32(Console.ReadLine());
            //coletores[index].Popular();
        }

        public void Delete()
        {
            // TODO: CHAMAR READ
            Console.WriteLine("Você possui certeza que deseja excluir seu perfil?");
            // TODO: NOME DO USUÁRIO, coletores.RemoveAt(login);
        }

    }
}

