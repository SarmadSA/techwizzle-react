package com.techwizzle.servlets;

import com.techwizzle.utils.FormValidator;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/formSubmit")
public class FormResponder extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //Get post parameters/client input
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String subject = request.getParameter("subject");
        String message = request.getParameter("message");

        //Validate input
        FormValidator validator = new FormValidator();
        JSONObject validationResponse = validator.validate(name, email, subject, message);

        //Send a response to requesting client
        PrintWriter out = response.getWriter();
        out.print(validationResponse);
    }
}
