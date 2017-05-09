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

        public ActionResult GettingStartedAdvanced()
        {
            var gettingStartedAdvancedModel = new GettingStartedAdvancedModel
            {
                SurveyModel = new SurveyModel("GettingStartedAdvanced")
            };
            return PartialView(gettingStartedAdvancedModel);
        }

        public ActionResult GetMoreLibrariesAdvanced()
        {
            var getMoreLibrariesAdvanced = new GetMoreLibrariesAdvancedModel
            {
                SurveyModel = new SurveyModel("GetMoreLibrariesAdvanced")
            };
            return PartialView(getMoreLibrariesAdvanced);
        }
    }
}