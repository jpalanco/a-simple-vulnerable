import io.github.pixee.security.ObjectInputFilters;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DeserializationServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            byte[] serializedData = request.getInputStream().readAllBytes();  // User-provided input

            // Vulnerability: Deserialization of untrusted data
            ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(serializedData));
            ObjectInputFilters.enableObjectFilterIfUnprotected(ois);
            Object obj = ois.readObject();
            ois.close();

            response.getWriter().println("Deserialized object: " + obj.toString());
        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().println("Error: " + e.getMessage());
        }
    }
}

