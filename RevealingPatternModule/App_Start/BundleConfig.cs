using System.Web;
using System.Web.Optimization;

namespace RevealingPatternModule
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));


            bundles.Add(new ScriptBundle("~/bundles/gettingstarted-classic").Include(
                    "~/Scripts/app/classic/GettingStarted.js",
                    "~/Scripts/app/classic/Survey.js"));

            bundles.Add(new ScriptBundle("~/bundles/getmorelibraries-classic").Include(
                    "~/Scripts/app/classic/GetMoreLibraries.js",
                    "~/Scripts/app/classic/Survey.js"));



            bundles.Add(new ScriptBundle("~/bundles/gettingstarted-module").Include(
                    "~/Scripts/app/module/GettingStarted.js",
                    "~/Scripts/app/module/_Survey.js"));

            bundles.Add(new ScriptBundle("~/bundles/getmorelibraries-module").Include(
                    "~/Scripts/app/module/GetMoreLibraries.js",
                    "~/Scripts/app/module/_Survey.js"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css"));
        }
    }
}
