using System;
using System.Data.SqlClient;
using System.Web.Mvc;

public class UserController : Controller
{
    [HttpPost]
    public ActionResult GetUser(string userId)
    {
        string connectionString = "Data Source=localhost;Initial Catalog=mydatabase;User ID=user;Password=password";

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();

            // Vulnerability: Direct concatenation of user input in SQL query
            string query = "SELECT * FROM Users WHERE Id = " + userId;
            SqlCommand command = new SqlCommand(query, connection);

            SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                ViewBag.UserId = reader["Id"];
                ViewBag.UserName = reader["Name"];
            }
        }

        return View();
    }
}

