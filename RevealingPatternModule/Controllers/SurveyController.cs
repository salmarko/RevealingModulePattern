using System.Web.Mvc;
using RevealingPatternModule.Models;

namespace RevealingPatternModule.Controllers
{
    public class SurveyController : Controller
    {
        [HttpPost]
        public ActionResult Update(SurveyModel model)
        {
            return Content(string.Format("Thanks for the feedback :). Your answer was *{0}*", model.Answer));
        }
    }
}