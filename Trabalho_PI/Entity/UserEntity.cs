using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trabalho_PI.Entity
{
    public class UserEntity
    {
        public int? Id { get; set; }
        public string? Type { get; set; }
        public string? Name { get; set; }
        public string? CPF_CNPJ { get; set; }
        public string? Email { get; set; }
        public int? Telephone { get; set; }

        public string? PassWord { get; set; }

        public string? Score { get; set; }
    }
}
