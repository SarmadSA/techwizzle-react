
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        JsonExporter card = new JsonExporter();
        JsonExporter game = new JsonExporter(); 
        
        card.setData("cards","title");
        card.setData("cards","id");
        card.setData("cards","price");
        card.printObject();
        
        game.setData("games", "id");
        game.setData("games", "title");
        game.setData("games", "fps");


    }
    
}
