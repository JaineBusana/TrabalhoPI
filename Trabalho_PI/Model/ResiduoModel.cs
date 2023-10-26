using Dapper;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.ConsoleHelpers;
using Trabalho_PI.Entity;

namespace Trabalho_PI.Model
{
    public class ResiduoModel : Database, ICrud
    {
        public void Create()
        {
            Console.Clear();
            ResiduoEntity residuo = new ResiduoEntity();
            residuo = Popular(residuo);
            string sql = "INSERT INTO RESIDUO VALUE (NULL, @NOME)";
            this.Execute(sql, residuo);
            Console.WriteLine("\nResíduo criado com sucesso!");
        }

        private ResiduoEntity Popular(ResiduoEntity residuo)
        {
            Console.WriteLine("Informe o nome do resíduo:");
            residuo.NOME = Console.ReadLine();
            return residuo;
        }

        public void Delete()
        {
            Console.Clear();
            Read();
            int id = ConsoleHelper.PerguntarID("excluir");
            var parametros = new { ID = id };
            string sql = "DELETE FROM RESIDUO WHERE ID = @ID";
            this.Execute(sql, parametros);
            Console.WriteLine("\nResíduo excluído com sucesso!");
        }

        public void Read()
        {
            Console.Clear();
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

        public ResiduoEntity GetById(int id)
        {
            string sql = "SELECT ID, NOME FROM RESIDUO WHERE ID = @ID";
            var parametros = new { ID = id };
            return this.GetConnection().QueryFirst<ResiduoEntity>(sql, parametros);
        }

        public ResiduoEntity GetResiduoEntity()
        {
            return GetById(ConsoleHelper.PerguntarID("editar"));
        }
        public void Update()
        {
            Console.Clear();
            Read();
            ResiduoEntity residuo = GetResiduoEntity();
            UpdateResiduoNome(residuo);
            string sql = "UPDATE RESIDUO SET NOME = @NOME WHERE ID = @ID";
            this.Execute(sql, residuo);
            Console.WriteLine("\nResíduo atualizado com sucesso!");
        }

        private static void UpdateResiduoNome(ResiduoEntity residuo)
        {
            Console.WriteLine($"Digite o novo nome para o residuo {residuo.NOME}");
            residuo.NOME = Console.ReadLine();
        }
    }
}
