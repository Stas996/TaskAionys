using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http;
using TaskAionys.DAL.Models;
using TaskAionys.BLL.Services;
using TaskAionys.ViewModels;

namespace TaskAionys.Controllers
{
    public class CitysApiController : ApiController
    {
        private CityService _service;

        public CitysApiController()
        {
            _service = new CityService(new AionysContext());
        }

        public CitysApiController(DbContext context)
        {
            _service = new CityService(context);
        }

        // GET: api/cities
        [HttpGet]
        [Route("api/cities")]
        public IEnumerable<CityViewModel> GetAll()
        {
            var models = _service.GetAll();
            return models;
        }
    }
}
