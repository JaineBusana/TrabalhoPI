using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI.Entity
{
    internal class ColetorEntity : UsuarioEntity
    {
        public double CPF { get; set; }
        public double CNPJ { get; set; }
        public string endereco { get; set; }
        public string formaDaColeta { get; set; }
        public string descricao { get; set; }
    }
}
