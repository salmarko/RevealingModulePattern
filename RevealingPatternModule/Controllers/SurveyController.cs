using System.Web.Mvc;
using RevealingPatternModule.Models;

namespace RevealingPatternModule.Controllers
{
    public class SurveyController : Controller
    {
        [HttpPost]
        public ActionResult Update(SurveyModel model)
        {
            return Content("Thanks for the response :).");
        }
    }
}