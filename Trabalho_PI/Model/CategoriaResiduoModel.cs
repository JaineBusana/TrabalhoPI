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
            Console.WriteLine($"Produto inserido - {linhas} linhas afetadas");

        }

        public void Delete()
        {
            throw new NotImplementedException();
        }

        public void Read()
        {
            foreach (var categoriaresiduo in ListCategoriaResiduoEntity())
            {
                Console.WriteLine($"{categoriaresiduo.ID} - categoria {categoriaresiduo.NOME} - subcategoria: {categoriaresiduo.RESIDUO_ID} ");
            }
        }

        public void Update()
        {
            throw new NotImplementedException();
        }

        private IEnumerable<CategoriaResiduoEntity> ListCategoriaResiduoEntity()
        {
            string sql = "SELECT * FROM CATEGORIA_RESIDUO JOIN IN RESIDU on residuo.id = categoria_residuo.id ";
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
            categoriaResiduo.NOME = ConsoleHelper.ChangeValue(categoriaResiduo.DESCRICAO);
            Console.WriteLine("Digite o preço do produto");
            

            categoriaResiduo.RESIDUO_ID = ChangeTipo(categoriaResiduo);
            return categoriaResiduo;
        }



    }
}
