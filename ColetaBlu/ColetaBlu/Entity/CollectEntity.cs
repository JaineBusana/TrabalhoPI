
namespace ColetaBlu.Entity
{
    public class CollectEntity
    {
        public int? Id { get; set; }
        public string SocialNumber { get; set; }
        public string Quantity { get; set; }
        public int User_Id { get; set; }
        public int CollectResidue_CollectionPoint_Id { get; set; }
        public int CollectResidue_Residue_Id { get; set; }
    }
}
