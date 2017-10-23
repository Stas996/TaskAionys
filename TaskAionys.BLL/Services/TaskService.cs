using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using TaskAionys.DAL.Interfaces;
using TaskAionys.DAL.Models;
using TaskAionys.DAL.Repositories;
using TaskAionys.ViewModels;

namespace TaskAionys.BLL.Services
{
    public class TaskService
    {
        private IRepository<Task> _repository;

        public TaskService(DbContext context)
        {
            _repository = new GenericRepository<Task>(context);
        }

        public IEnumerable<TaskViewModel> GetAll()
        {
            var models = _repository.GetAll();
            var viewModels = Mapper.Map<List<TaskViewModel>>(models);
            return viewModels;
        }

        public IEnumerable<TaskViewModel> GetBy(Func<Task, bool> predicate)
        {
            var models = _repository.GetBy(predicate);
            var viewModels = Mapper.Map<List<TaskViewModel>>(models);
            return viewModels;
        }

        public TaskViewModel GetById(object id)
        {
            var model = _repository.GetById(id);
            var viewModel = Mapper.Map<TaskViewModel>(model);
            return viewModel;
        }

        public void Create(TaskViewModel entity)
        {
            entity.StartTime = DateTime.UtcNow;
            entity.EndTime = DateTime.UtcNow;
            var model = Mapper.Map<Task>(entity);
            _repository.Create(model);
        }

        public void Update(TaskViewModel entity)
        {
            var model = Mapper.Map<Task>(entity);
            _repository.Update(model);
        }

        public void Delete(object id)
        {
            _repository.Delete(id);
        }

        public int Save()
        {
            return _repository.Save();
        }
    }
}
