import java.sql.*;
import java.util.ArrayList;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONObject;

public class DbConnect {
    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    private ArrayList<JSONObject> jsonObjcts;
    
    public DbConnect(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/techwizzle", "root", "");
            this.statement = connection.createStatement();
            this.jsonObjcts = new ArrayList<>();
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
    }
    
    public Iterator<String> getData(String tableName, String dataColumn){
        ArrayList<String> dataList = new ArrayList<>();
        try{
            String query = "Select * from " + tableName;
            resultSet = statement.executeQuery(query);
            
            while(resultSet.next()){
              String data = resultSet.getString(dataColumn);
              dataList.add(data);
            }
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return dataList.iterator();
    }
    
    public void importData(){
        try{
            String cardsQuery = "SELECT * FROM CARDS";
            resultSet = statement.executeQuery(cardsQuery);
            
            while(resultSet.next()){
              JSONObject card = new JSONObject();
              
              String id = resultSet.getString("id");
              String title = resultSet.getString("title");
              String price = resultSet.getString("price");
            
              card.put("id", id);
              card.put("title", title);
              card.put("price", price);
              
              
              
              String gamesQuery = "SELECT * FROM GAMES WHERE ID = " + id;
              resultSet = statement.executeQuery(gamesQuery);
              
              JSONArray gamesList = new JSONArray();
              while(resultSet.next()){
                JSONObject game = new JSONObject();
        
                String gameId = resultSet.getString("id");
                String gameTitle = resultSet.getString("title");
                String gameFPS = resultSet.getString("fps");

                game.put("id", gameId);
                game.put("title", gameTitle);
                game.put("fps", gameFPS);
                
                gamesList.put(game);
                
              }
              card.put("games", gamesList);
              
              this.jsonObjcts.add(card);
              
              //Debugging
              int num = 1;
              System.out.println(num);
              num++;
            }

        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
    }
    
    public Iterator<JSONObject> getData(){
         return this.jsonObjcts.iterator();   
    }
    
    public ArrayList<JSONObject> getDataArray(){
         return this.jsonObjcts;   
    }
}
