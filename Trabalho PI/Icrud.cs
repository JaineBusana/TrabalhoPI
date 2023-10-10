using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI
{
    internal interface Icrud
    {
        public void Criar();
        public void Ler();
        public void Atualizar();
        public void Deletar();
    }
}
