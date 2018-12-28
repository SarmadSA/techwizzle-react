package com.techwizzle.servlets;

import com.techwizzle.utils.FormValidator;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/formSubmit")
public class FormResponder extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //Get request-payload
        JSONObject payload = getPayload(request);

        //Get post parameters/client input
        String name = payload.getString("name");
        String email = payload.getString("email");
        String subject = payload.getString("subject");
        String message = payload.getString("message");

        //Validate input
        FormValidator validator = new FormValidator();
        JSONObject validationResponse = validator.validate(name, email, subject, message);

        //Send a response to requesting client
        PrintWriter out = response.getWriter();
        out.print(validationResponse);
    }

    private JSONObject getPayload(HttpServletRequest request) throws IOException{
        // Read from request
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            buffer.append(line);
        }
        String payload = buffer.toString();
        return (new JSONObject(payload));
    }
}
