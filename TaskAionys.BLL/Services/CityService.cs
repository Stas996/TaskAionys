using AutoMapper;
using System.Collections.Generic;
using System.Data.Entity;
using TaskAionys.DAL.Interfaces;
using TaskAionys.DAL.Models;
using TaskAionys.DAL.Repositories;
using TaskAionys.ViewModels;

namespace TaskAionys.BLL.Services
{
    public class CityService
    {
        private IRepository<City> _repository;

        public CityService(DbContext context)
        {
            _repository = new GenericRepository<City>(context);
        }

        public IEnumerable<CityViewModel> GetAll()
        {
            var models = _repository.GetAll();
            var viewModels = Mapper.Map<List<CityViewModel>>(models);
            return viewModels;
        }
    }
}
