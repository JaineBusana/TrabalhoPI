using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trabalho_PI.Entity;

namespace Trabalho_PI.Contracts.Repository
{
    internal interface IUserRepository
    {
        Task Add(UserDTO user);
        Task<IEnumerable<UserEntity>> Read();
        Task Update(UserEntity user);
        Task Delete(int id);
        Task<UserEntity> GetByEmail(string Email);
    }
}
