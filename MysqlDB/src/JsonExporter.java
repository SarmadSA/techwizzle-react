
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONObject;

public class JsonExporter {
    
    private final JSONObject obj;    
    private final JSONArray objArray;
    private final DbConnect connection = new DbConnect();
    
    public JsonExporter() {
        this.obj = new JSONObject();
        this.objArray = new JSONArray();
    }
    
    public void setData(String tableName, String dataColumn){
        Iterator<String> it = connection.getData(tableName, dataColumn);
        
        while(it.hasNext()){
            String data = it.next();
            this.obj.put(dataColumn, data);
        }
    }
    
    public void printObject(){
        System.out.println(this.obj);
    }
    
//    public void addToObject(String dataColumn, String value){
//        this.obj.put(dataColumn, value);
//    }
}
