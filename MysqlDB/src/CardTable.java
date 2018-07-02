import java.sql.ResultSet;
import java.util.HashMap;
import org.json.JSONArray;
import org.json.JSONObject;

public class CardTable {
    private DbConnect connection;
    //private HashMap<String, JSONObject> list;
    private GamesTable games;
    private JSONArray list;
    
    public CardTable(){
        this.connection = new DbConnect();
        //this.list = new HashMap<>();
        this.games = new GamesTable();
        this.list = new JSONArray();
    }
    
    public void Initialize(){
        this.importData();
        this.addGames();
    }
    
    private void importData(){
        try{
            String query = "SELECT * FROM CARDS";
            ResultSet resultSet = this.connection.getStatement().executeQuery(query);
            
            while(resultSet.next()){
              JSONObject card = new JSONObject();
              
              String id = resultSet.getString("id");
              String title = resultSet.getString("title");
              String dateOfRelease = resultSet.getString("dateOfRelease");
              String price = resultSet.getString("price");
              String link = resultSet.getString("link");
              String image = resultSet.getString("image");
              String profile = resultSet.getString("profile");
              
              card.put("id", id);
              card.put("title", title);
              card.put("dateOfRelease", dateOfRelease);
              card.put("price", price);
              card.put("link", link);
              card.put("image", image);
              card.put("profile", profile);
              
              this.list.put(card);
            }
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
    }
    
    private void addGames(){
        for(Object obj: this.list){
            JSONObject object = (JSONObject)obj;
            String id = (String) object.get("id");
            object.put("games", games.getGames(id));
        }
    }
    
    public JSONObject getData(){
        JSONObject data = new JSONObject();
        data.put("cards", this.list);
        return data;
    }
}    
