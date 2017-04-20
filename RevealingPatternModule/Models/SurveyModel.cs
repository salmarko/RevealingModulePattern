namespace RevealingPatternModule.Models
{
    public class SurveyModel
    {
        public string PageId { get; set; }
        public SurveyAnswer Answer { get; set; }

        public SurveyModel()
        {
            
        }

        public SurveyModel(string pageId)
        {
            PageId = pageId;
        }
    }
}