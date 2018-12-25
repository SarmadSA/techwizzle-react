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

        response.setContentType("application/json");

        //TODO: set the second parameter to only authorized clients
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");

        PrintWriter out = response.getWriter();

        String query = "SELECT * FROM CARDS";
        try{
            ResultSet rs = connection.getStatement().executeQuery(query);
            JSONArray jsonArray = convertToJSON(rs);

            //Print all objects inside of JSON array
            out.print("[");
            for(int i = 0; i < jsonArray.length(); i++){
                out.print(jsonArray.getJSONObject(i));
                if(i != jsonArray.length() - 1){ //if not the last element, add comma to separate objects.
                    out.print(",");
                }
            }
            out.print("]");

            out.flush();
            out.close();
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
    private static JSONArray convertToJSON(ResultSet resultSet)
            throws Exception {
        JSONArray jsonArray = new JSONArray();
        while (resultSet.next()) {
            int total_rows = resultSet.getMetaData().getColumnCount();
            JSONObject obj = new JSONObject();
            for (int i = 0; i < total_rows; i++) {
                obj.put(resultSet.getMetaData().getColumnLabel(i + 1).toLowerCase(), resultSet.getObject(i + 1));
            }
            jsonArray.put(obj);
        }
        return jsonArray;
    }
}