package com.techwizzle.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.techwizzle.utils.DBConnect;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;

@WebServlet("/getJsonData")
public class JsonExporter extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        DBConnect connection = new DBConnect();

        PrintWriter out = response.getWriter();

        String query = "SELECT * FROM CARDS";
        try{
            ResultSet rs = connection.getStatement().executeQuery(query);
            out.println("there are that many objects: ");
            out.println(convertToJSON(rs).length());
            for(int i = 0; i < convertToJSON(rs).length(); i++){
                out.print("hello");
            }
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }

    }

    /**
     * Convert a result set into a JSON Array
     * @param resultSet
     * @return a JSONArray
     * @throws Exception
     */
    public static JSONArray convertToJSON(ResultSet resultSet)
            throws Exception {
        JSONArray jsonArray = new JSONArray();
        while (resultSet.next()) {
            int total_rows = resultSet.getMetaData().getColumnCount();
            for (int i = 0; i < total_rows; i++) {
                JSONObject obj = new JSONObject();
                obj.put(resultSet.getMetaData().getColumnLabel(i + 1).toLowerCase(), resultSet.getObject(i + 1));
                jsonArray.put(obj);
            }
        }
        return jsonArray;
    }
}