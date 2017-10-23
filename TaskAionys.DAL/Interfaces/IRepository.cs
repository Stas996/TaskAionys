using System;
using System.Collections.Generic;

namespace TaskAionys.DAL.Interfaces
{
    public interface IRepository<TEntity>
        where TEntity : class
    {
        void Create(TEntity entity);
        TEntity GetById(object id);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> GetBy(Func<TEntity, bool> predicate);
        void Delete(object id);
        void Update(TEntity entity);
        int Save();
    }
}
