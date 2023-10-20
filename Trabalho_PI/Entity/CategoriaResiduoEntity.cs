using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI.Entity
{
    public class CategoriaResiduoEntity
    {
        public int ID { get; set; }
        public string NOME { get; set; }
        public string RESIDUO_ID { get; set;}

        public ResiduoEntity RESIDUO{ get; set; }


    }
}
