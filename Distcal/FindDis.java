import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FindDis extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String disParam = request.getParameter("dis");

        try {
            double distance = Double.parseDouble(disParam);
            double fare = distance * 2.5;  

            out.println("<html><body>");
            out.println("<h2>Fare Calculation Result</h2>");
            out.println("<p>Distance: " + distance + " km</p>");
            out.println("<p>Fare: " + fare + " INR</p>");
            out.println("<a href='index.html'>Go Back</a>");
            out.println("</body></html>");
        } catch (NumberFormatException e) {
            out.println("<html><body>");
            out.println("<p>Invalid distance entered. Please enter a valid number.</p>");
            out.println("<a href='index.html'>Go Back</a>");
            out.println("</body></html>");
        }
    }
}