using ColetaBlu.DTO;
using ColetaBlu.Entity;

namespace ColetaBlu.Contracts_Repository
{
    public interface IUserRepository
    {
        Task Add(UserDTO user);
        Task<IEnumerable<UserEntity>> Read();
        Task<UserEntity> Update(UserEntity user);
        Task<UserEntity> Delete(int id, UserEntity user);
        Task<UserEntity> GetById(int id);
        Task<UserTokenDTO> LogIn(UserLoginDTO user);
    }
}
