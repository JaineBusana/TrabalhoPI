using Trabalho_PI.Model;

namespace Trabalho_PI
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ResiduoModel residuoModel = new ResiduoModel();
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            
            residuo.Delete();
            
        }
    }
}