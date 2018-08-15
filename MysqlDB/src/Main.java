
import java.io.FileWriter;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        CardTable cards = new CardTable();
        cards.Initialize();
        
        try(FileWriter file = new FileWriter("../src/resources/cards.json")){
            file.write(cards.getData().toString());
            file.flush();
            System.out.println(cards.getData());
        }
        catch(IOException e){

        }
    }
    
}
