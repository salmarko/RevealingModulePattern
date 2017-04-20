using System.Web.Mvc;

namespace RevealingPatternModule.Controllers
{
    public class ModuleController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}