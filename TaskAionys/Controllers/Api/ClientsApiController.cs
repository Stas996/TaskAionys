using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http;
using TaskAionys.DAL.Models;
using TaskAionys.BLL.Services;
using TaskAionys.ViewModels;

namespace TaskAionys.Controllers
{
    public class ClientsApiController : ApiController
    {
        private ClientService _service;

        public ClientsApiController()
        {
            _service = new ClientService(new AionysContext());
        }

        public ClientsApiController(DbContext context)
        {
            _service = new ClientService(context);
        }

        // GET: api/clients
        [HttpGet]
        [Route("api/clients")]
        public IEnumerable<ClientViewModel> GetAll()
        {
            var models = _service.GetAll();
            return models;
        }

        // GET: api/clients/5
        [HttpGet]
        [Route("api/clients/{id}")]
        public ClientViewModel GetById(int id)
        {
            var model = _service.GetById(id);
            return model;
        }

        // POST: api/clients
        [HttpPost]
        [Route("api/clients")]
        public int Create([FromBody]ClientViewModel entity)
        {
            _service.Create(entity);
            return _service.Save();
        }

        // PUT: api/clients/update
        [HttpPut]
        [Route("api/clients/update")]
        public int Update([FromBody]ClientViewModel entity)
        {
            _service.Update(entity);
            return _service.Save();
        }

        // DELETE: api/clients/delete/5
        [HttpDelete]
        [Route("api/clients/delete/{id}")]
        public int Delete(int id)
        {
            _service.Delete(id);
            return _service.Save();
        }
    }
}
