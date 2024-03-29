﻿using ColetaBlu.Contracts_Repository;
using ColetaBlu.DTO;
using ColetaBlu.Entity;
using ColetaBlu.Infrastructure;
using Dapper;
using Microsoft.AspNet.Identity;
using Mysqlx.Session;

namespace ColetaBlu.Repository
{
    internal class UserRepository : Connection, IUserRepository
    {
        public async Task Add(UserDTO user)
        {
            string sql = @"
          INSERT INTO User (Type, Name, SocialNumber, Email, Password, Score)
                         VALUE(@Type, @Name, @SocialNumber, @Email, @Password, @Score)

         ";
            await Execute(sql, user);
        }

        public async Task<UserEntity> Delete(int id, UserEntity user)
        {
            string sql = "DELETE FROM User WHERE Id = @id";
            await Execute(sql, new { id });
            return user;
        }

        public async Task<UserEntity> GetById(int id)
        {
            string sql = "SELECT * FROM User WHERE Id = @id";
            return await GetConnection().QueryFirstAsync<UserEntity>(sql, new { id });
        }

        public async Task<IEnumerable<UserEntity>> Read()
        {
            string sql = "SELECT * FROM user";
            return await GetConnection().QueryAsync<UserEntity>(sql);
        }

        public async Task<UserTokenDTO> LogIn(UserLoginDTO user)
        {
            string sql = "SELECT * FROM user WHERE Email = @Email AND Password = @Password";
            UserEntity userLogin = await GetConnection().QueryFirstAsync<UserEntity>(sql, user);
            return new UserTokenDTO
            {
                Token = Authentication.GenerateToken(userLogin),
                User = userLogin
            };
        }

        public async Task<UserEntity> Update(UserEntity user)
        {
            string sql = @"
                     UPDATE User
                     SET Type = @Type,
                         Name = @Name,
                         SocialNumber = @SocialNumber,
                         Email = @Email,
                         Password = @Password,
                         Score = @Score
                     WHERE Id = @Id
            ";
            await Execute(sql, user);
            return user;
        }

        public async Task UpdateScore(UserEntity user)
        {
            string sql = @"
                     UPDATE User
                     SET Score = @Score
                     WHERE Id = @Id
            ";
            await Execute(sql, user);
        }
    }
}
