using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Frequenticity.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult About()
        {
            ViewBag.Message = "About the developer.";

            return View();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Main()
        {
            ViewBag.Message = "Main Application Processing";

            return View();
        }
    }
}