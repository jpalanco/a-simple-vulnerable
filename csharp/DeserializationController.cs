using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Web.Mvc;

public class DeserializationController : Controller
{
    [HttpPost]
    public ActionResult DeserializeObject()
    {
        byte[] serializedData = Request.BinaryRead(Request.ContentLength);  // User-provided input

        System.Text.Json.JsonSerializer formatter = new System.Text.Json.JsonSerializer();
        using (MemoryStream ms = new MemoryStream(serializedData))
        {
            // Vulnerability: Insecure deserialization of untrusted input
            object obj = formatter.Deserialize(ms);
            ViewBag.Object = obj;
        }

        return View();
    }
}

