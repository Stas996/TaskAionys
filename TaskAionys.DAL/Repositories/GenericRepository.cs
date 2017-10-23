using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using TaskAionys.DAL.Interfaces;

namespace TaskAionys.DAL.Repositories
{
    public class GenericRepository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        private DbContext _context;
        private DbSet<TEntity> _dbSet;

        public GenericRepository(DbContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        public void Create(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public void Delete(object id)
        {
            var entity = _dbSet.Find(id);
            _dbSet.Remove(entity);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbSet.AsNoTracking().ToList();
        }

        public IEnumerable<TEntity> GetBy(Func<TEntity, bool> predicate)
        {
            return _dbSet.AsNoTracking().Where(predicate).ToList();
        }

        public TEntity GetById(object id)
        {
            return _dbSet.Find(id);
        }

        public int Save()
        {
            return _context.SaveChanges();
        }

        public void Update(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }
    }
}
