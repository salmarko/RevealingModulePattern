using System.Web.Mvc;

namespace RevealingPatternModule.Controllers
{
    public class SpaghettiController : Controller
    {
        public ActionResult GettingStarted()
        {
            return View();
        }

        public ActionResult GettingStartedWithPartial()
        {
            return View();
        }

        public ActionResult GetMoreLibraries()
        {
            return View();
        }
    }
}