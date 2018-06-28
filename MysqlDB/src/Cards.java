import java.util.Iterator;

public class Cards {
    private final String tableName = "cards";
    private final DbConnect connection;

    public Cards() {
        this.connection = new DbConnect();
    }
    
    public void getData(String dataColumn){
        Iterator<String> it = connection.getData(this.tableName, dataColumn);
        while(it.hasNext()){
            String title = it.next();
            System.out.println(title);
        }
    }
}
