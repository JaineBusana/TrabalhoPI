using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{

    
        public interface IPointRegistrationRepository
        {
            Task Add(PointRegistrationDTO user);
            Task<IEnumerable<PointRegistration>> Read();
            Task Update(PointRegistrationDTO user);
            Task Delete(int id);


        }
    
}
