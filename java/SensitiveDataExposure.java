import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SensitiveDataExposure {
    public void connectToDatabase(String username, String password) {
        try {
            // User could provide incorrect username or password
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", username, password);
        } catch (SQLException e) {
            // Vulnerability: Exposing sensitive data in error message
            System.err.println("Failed to connect to database with user: " + username + " and password: " + password);
        }
    }
}

