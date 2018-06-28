import java.sql.*;
import java.util.ArrayList;
import java.util.Iterator;

public class DbConnect {
    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;
    
    public DbConnect(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/techwizzle", "root", "");
            this.statement = connection.createStatement();
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
}
