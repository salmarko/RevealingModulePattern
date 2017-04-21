using System.Web.Mvc;
using RevealingPatternModule.Models;

namespace RevealingPatternModule.Controllers
{
    public class ModuleController : Controller
    {
        public ActionResult GettingStarted()
        {
            var gettingStartedModel = new GettingStartedModel
            {
                SurveyModel = new SurveyModel("GettingStarted")
            };
            return View(gettingStartedModel);
        }

        public ActionResult GetMoreLibraries()
        {
            var getMoreLibrariesModel = new GetMoreLibrariesModel
            {
                SurveyModel = new SurveyModel("GetMoreLibraries")
            };
            return View(getMoreLibrariesModel);
        }
    }
}