namespace ColetaBlu.Entity // TEM QUE FICAR IGUAL AO DO BANCO
{
    public class CollectionPointEntity
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Street { get; set; }
        public int? Number { get; set; }
        public string? Bairro { get; set; }

        public string? Local { get; set; }

        public int? Neighborhood_Id { get; set; }
    }

}