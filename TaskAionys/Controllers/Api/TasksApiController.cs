using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http;
using TaskAionys.BLL.Services;
using TaskAionys.DAL.Models;
using TaskAionys.ViewModels;

namespace TaskAionys.Controllers
{
    public class TasksApiController : ApiController
    {
        private TaskService _service;

        public TasksApiController()
        {
            _service = new TaskService(new AionysContext());
        }

        public TasksApiController(DbContext context)
        {
            _service = new TaskService(context);
        }

        // GET: api/tasks
        [HttpGet]
        [Route("api/tasks")]
        public IEnumerable<TaskViewModel> GetAll()
        {
            var models = _service.GetAll();
            return models;
        }

        // GET: api/client-tasks/5
        [HttpGet]
        [Route("api/client-tasks/{clientId}")]
        public IEnumerable<TaskViewModel> GetByClientId(int clientId)
        {
            var models = _service.GetBy(t => t.ClientId == clientId);
            return models;
        }

        // GET: api/tasks/5
        [HttpGet]
        [Route("api/tasks/{id}")]
        public TaskViewModel GetById(int id)
        {
            return _service.GetById(id);
        }

        // POST: api/tasks
        [HttpPost]
        [Route("api/tasks")]
        public int Create([FromBody]TaskViewModel entity)
        {
            _service.Create(entity);
            return _service.Save();
        }

        // PUT: api/tasks/update
        [HttpPut]
        [Route("api/tasks/update")]
        public int Update([FromBody]TaskViewModel entity)
        {
            _service.Update(entity);
            return _service.Save();
        }

        // DELETE: api/tasks/delete/5
        [HttpDelete]
        [Route("api/tasks/delete/{id}")]
        public int Delete(int id)
        {
            _service.Delete(id);
            return _service.Save();
        }
    }
}
