using System;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.ConsoleHelpers;
using Trabalho_PI.Entity;

namespace Trabalho_PI.Model
{
    public class CategoriaResiduoModel : Database, ICrud 
    {
        public void Create()
        {
            CategoriaResiduoEntity categoriaResiduo = new CategoriaResiduoEntity();
            categoriaResiduo = Popular(categoriaResiduo);
            string sql = "INSERT INTO PRODUTO VALUE (NULL, @NOME, @RESIDUO_ID)";
            int linhas = this.Execute(sql, categoriaResiduo);
        }

     

        public void Read()
        {
            foreach (var categoriaresiduo in ListCategoriaResiduoEntity())
            {
                Console.WriteLine($"{categoriaresiduo.ID} - categoria {categoriaresiduo.NOME} - subcategoria: {categoriaresiduo.RESIDUO_ID} ");
            }
        }
        public void Delete()
        {
            Read();
            var parameters = new { Id = ConsoleHelper.PerguntarID("excluir") };
            string sql = "DELETE FROM CATEGORIA_RESIDUO WHERE ID = @ID";
            this.Execute(sql, parameters);
            Console.WriteLine("Categoria excluida com sucesso");
        }

        public ResiduoEntity GetById(int id)
        {
            string sql = "SELECT ID, NOME FROM RESIDUO WHERE ID = @ID";
            var parametros = new { ID = id };
            return this.GetConnection().QueryFirst<ResiduoEntity>(sql, parametros);
        }

        public CategoriaResiduoEntity GetResiduoEntity()
        {
            return GetById(ConsoleHelper.PerguntarID("editar"));
        }
        public void Update()
        {

            Read();
            CategoriaResiduoEntity categoriaResiduo = new CategoriaResiduoEntity();
            categoriaResiduo = GetResiduoEntity();
            UpdateResiduoNome(categoriaResiduo);
            string sql = "UPDATE RESIDUO SET NOME = @NOME WHERE ID = @ID";
            this.Execute(sql, categoriaResiduo);
            Console.WriteLine("Residuo atualizado com sucesso!");
        }
        private static void UpdateResiduoNome(CategoriaResiduoEntity categoriaResiduo)
        {
            Console.WriteLine($"Digite o novo nome para o residuo {categoriaResiduo.NOME}");
            categoriaResiduo.NOME = Console.ReadLine();
        }







        private IEnumerable<CategoriaResiduoEntity> ListCategoriaResiduoEntity()
        {
            string sql = "SELECT * FROM CATEGORIA_RESIDUO JOIN RESIDU ON RESIDUO.ID = CATEGORIA_RESIDUO.ID ";
            return this.GetConnection().Query<CategoriaResiduoEntity, ResiduoEntity, CategoriaResiduoEntity>(
                sql,
                (categoriaresiduo, residuo) =>
                {
                    categoriaresiduo.RESIDUO = residuo;
                    return categoriaresiduo;
                }
            );
        }

        private CategoriaResiduoEntity Popular(CategoriaResiduoEntity categoriaResiduo)
        {
            Console.WriteLine("Digite o nome do produto");
            categoriaResiduo.NOME = ConsoleHelper.ChangeValue(categoriaResiduo.NOME);
            Console.WriteLine("Digite o preço do produto");
            

            categoriaResiduo.RESIDUO_ID = ChangeResiduo(categoriaResiduo);
            return categoriaResiduo;
        }
        private int ChangeResiduo(CategoriaResiduoEntity categoriaResiduo)
        {
            ResiduoModel residuoModel = new ResiduoModel();

            if (categoriaResiduo.RESIDUO_ID > 0)
            {
                Console.WriteLine($"Atual = {categoriaResiduo.RESIDUO.NOME}  deseja alterar ? S/N");
                char resposta = Convert.ToChar(Console.ReadLine().ToUpper());
                if (resposta == 'S')
                {
                    residuoModel.Read();
                    Console.WriteLine("Digite o id do tipo do produto");
                    categoriaResiduo.RESIDUO_ID = Convert.ToInt32(Console.ReadLine());
                }
            }
            else
            {
                residuoModel.Read();
                Console.WriteLine("Digite o id do tipo do produto");
                categoriaResiduo.RESIDUO_ID = Convert.ToInt32(Console.ReadLine());
            }
            return categoriaResiduo.RESIDUO_ID;
        }


    }
}
