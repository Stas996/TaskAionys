using System.Web.Http;
using System.Web.Optimization;
using System.Web.Routing;
using TaskAionys.BLL.Mapping;

namespace TaskAionys
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            MappingConfig.Configure();
        }
    }
}
