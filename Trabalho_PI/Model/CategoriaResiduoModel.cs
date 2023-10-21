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
            string sql = "INSERT INTO CATEGORIA_RESIDUO VALUE (NULL, @NOME, @RESIDUO_ID)";
            int linhas = this.Execute(sql, categoriaResiduo);
        }

     

        public void Read()
        {
            foreach (var categoriaresiduo in ListCategoriaResiduoEntity())
            {
                Console.WriteLine($"{categoriaresiduo.ID} - categoria: {categoriaresiduo.NOME} - residuo: {categoriaresiduo.RESIDUO_ID} ");
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

        public void Update()

        {
            CategoriaResiduoEntity categoriaResiduo = Popular(GetById());
            string sql = "UPDATE CATEGORIA_RESIDUO SET NOME = @NOME, RESIDUO = @RESIDUO, RESIDUO_ID = @RESIDUO_ID WHERE ID = @ID";
            int linhas = this.Execute(sql, categoriaResiduo);
            Console.WriteLine("Categoria atualizado com sucesso!");
        }
        public CategoriaResiduoEntity GetById(int id = 0)
        {
            if (id == 0)
            {
                id = GetIndex();
            }
            return ListCategoriaResiduoEntity().Where(o => o.ID == id).ToList()[0];
        }
        private int GetIndex()
        {
            Read();
            Console.WriteLine("Digite o id para continuar");
            return Convert.ToInt32(Console.ReadLine());
        }





        private IEnumerable<CategoriaResiduoEntity> ListCategoriaResiduoEntity()
        {
            string sql = @"SELECT * 
                           FROM CATEGORIA_RESIDUO 
                           JOIN RESIDUO
                           ON  RESIDUO.ID = RESIDUO_ID ";
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
            Console.WriteLine("Digite o nome da categoria");
            categoriaResiduo.NOME = ConsoleHelper.ChangeValue(categoriaResiduo.NOME);
            
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
                    Console.WriteLine("Digite o id do residuo");
                    categoriaResiduo.RESIDUO_ID = Convert.ToInt32(Console.ReadLine());
                }
            }
            else
            {
                residuoModel.Read();
                Console.WriteLine("Digite o id do tipo do residuo");
                categoriaResiduo.RESIDUO_ID = Convert.ToInt32(Console.ReadLine());
            }
            return categoriaResiduo.RESIDUO_ID;
        }


    }
}
