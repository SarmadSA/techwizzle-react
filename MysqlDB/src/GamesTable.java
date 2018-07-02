import java.sql.ResultSet;
import org.json.JSONArray;
import org.json.JSONObject;

public class GamesTable {
    private DbConnect connection; 
    
    public GamesTable(){
        this.connection = new DbConnect();
    }
    
    /**
     * Returns a JSON array of game with the given ID
     * 
     * @param id the id of the games to return
     * @return JSON array of game with the given ID
     */
    public JSONArray getGames(String id){
        JSONArray gamesList = new JSONArray();
        try{
            String query = "SELECT * FROM GAMES WHERE ID = " + id;
            ResultSet resultSet = this.connection.getStatement().executeQuery(query);

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
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
        return gamesList;
    }
}

