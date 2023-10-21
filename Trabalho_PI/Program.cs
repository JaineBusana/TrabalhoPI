using Trabalho_PI.Model;

namespace Trabalho_PI
{
    internal class Program
    {
        static void Main(string[] args)
        {
            CategoriaResiduoModel residuo = new CategoriaResiduoModel();
            residuo.Create();
            residuo.Read();
        }
    }
}