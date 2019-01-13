package com.techwizzle.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.techwizzle.Data.Card;
import com.techwizzle.Data.Game;
import com.techwizzle.Data.Register;
import com.techwizzle.utils.DBConnect;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;

@WebServlet("/getData")
public class JsonExporter extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");

        String query = "SELECT * FROM CARDS";
        DBConnect connection = new DBConnect();
        PrintWriter out = response.getWriter();

        try{
            JSONArray jsonArray = convertToJSON(connection.executeSQLQuery(query));
            out.print(jsonArray);
        } catch(Exception e){
            //TODO: handle error
        } finally {
            out.flush();
            out.close();
            connection.closeResultSet();
            connection.closeStatement();
            connection.closeConnection();
        }
    }

    /**
     * Convert a result set into a JSON Array
     * @param resultSet
     * @return a JSONArray
     * @throws Exception
     */
    private static JSONArray convertToJSON(ResultSet resultSet) throws Exception {
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

    private void addCards(ResultSet resultSet) throws SQLException {
        Register register = new Register();
        while (resultSet.next()) {
            Card card = new Card();
            card.setId(Integer.parseInt(resultSet.getString("id")));
            card.setTitle(resultSet.getString("title"));

            //assume you have gotten all games from result set.
            addGames(resultSet, register.getCardsIterator());
            register.addCard(card);
        }
    }

    private void addGames(ResultSet resultSet, Iterator it) throws SQLException {
        while (it.hasNext()){


            Card c = (Card) it.next();
            Game g = new Game();
            // you could do, select all form games where card ID = c.getID
            c.getId();
            resultSet.get
            g.setId(Integer.parseInt(resultSet.getString("id")));
            c.addGame();
        }


        while (resultSet.next()) {
            Game game = new Game();
            game.setId(Integer.parseInt(resultSet.getString("id")));
            game.setTitle(resultSet.getString("title"));

            card.addGame(game);
        }
    }

}