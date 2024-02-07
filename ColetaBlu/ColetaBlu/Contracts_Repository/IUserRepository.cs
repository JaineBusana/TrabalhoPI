using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IUserRepository
    {
        Task Add(UserDTO user);
        Task<IEnumerable<UserEntity>> Read();
        Task Update(UserEntity user);
        Task Delete(int id);
        Task<UserEntity> GetByEmail(string email);

        Task<UserTokenDTO> LogIn(UserLoginDTO user);

    }
}
