using AutoMapper;
using System.Collections.Generic;
using System.Data.Entity;
using TaskAionys.DAL.Interfaces;
using TaskAionys.DAL.Models;
using TaskAionys.DAL.Repositories;
using TaskAionys.ViewModels;

namespace TaskAionys.BLL.Services
{
    public class ClientService
    {
        private IRepository<Client> _repository;

        public ClientService(DbContext context)
        {
            _repository = new GenericRepository<Client>(context);
        }

        public IEnumerable<ClientViewModel> GetAll()
        {
            var models = _repository.GetAll();
            var viewModels = Mapper.Map<List<ClientViewModel>>(models);
            return viewModels;
        }

        public ClientViewModel GetById(object id)
        {
            var model = _repository.GetById(id);
            var viewModel = Mapper.Map<ClientViewModel>(model);
            return viewModel;
        }

        public void Create(ClientViewModel entity)
        {
            var model = Mapper.Map<Client>(entity);
            _repository.Create(model);
        }

        public void Update(ClientViewModel entity)
        {
            var model = Mapper.Map<Client>(entity);
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
