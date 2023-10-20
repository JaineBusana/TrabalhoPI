using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.ConsoleHelpers;
using Trabalho_PI.Entity;

namespace Trabalho_PI.Model
{
    internal class ResiduoModel : Database, ICrud
    {
        public void Create()
        {
            ResiduoEntity residuo = new ResiduoEntity();
            residuo = Popular(residuo);
            string sql = "INSERT INTO RESIDUO VALUE (NULL, @NOME)";
            this.Execute(sql, residuo);
        }

        private ResiduoEntity Popular(ResiduoEntity residuo)
        {
            Console.WriteLine("Informe o nome do residuo:");
            residuo.NOME = Console.ReadLine();
            return residuo;
        }

        public void Delete()
        {
            Read();
            int id = PerguntarID("Digite o ID do residuo que deseja excluir");
            var parametros = new { ID = id };
            string sql = "DELETE FROM RESIDUO WHERE ID = @ID";
            this.Execute(sql, parametros);
        }

        private int PerguntarID(string mensagem = "")
        {
            Console.WriteLine(mensagem);
            int id = Convert.ToInt32(Console.ReadLine());
            return id;
        }

        public void Read()
        {
            foreach (var residuo in ListResiduos())
            {
                Console.WriteLine($"{residuo.ID} - {residuo.NOME}");
            }
        }

        private IEnumerable<ResiduoEntity> ListResiduos()
        {
            string sql = "SELECT * FROM RESIDUO";
            return this.GetConnection().Query<ResiduoEntity>(sql);
        }

        public void Update()
        {
            Read();
            int id = PerguntarID("Digite o ID do residuo que deseja editar");
            ResiduoEntity residuo = new ResiduoEntity();
            var parametros = new { ID = id };
            string sql = "SELECT ID, NOME FROM RESIDUO WHERE ID = @ID";
            residuo = this.GetConnection().QueryFirst<ResiduoEntity>(sql, parametros);

        }
    }
}
