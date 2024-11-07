using System;
using System.Web.Mvc;

public class LoginController : Controller
{
    [HttpPost]
    public ActionResult Login(string username, string password)
    {
        try
        {
            // Assume we're trying to connect to a database
            throw new Exception("Failed to connect to database");  // Simulated failure
        }
        catch (Exception ex)
        {
            // Vulnerability: Exposing credentials in error message
            return Content("Error: " + ex.Message + ". Username: " + username + ", Password: " + password);
        }
    }
}

