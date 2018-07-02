import java.sql.*;

public class DbConnect {
    
    //Constatnts
    private final String driver = "com.mysql.cj.jdbc.Driver";
    private final String url = "jdbc:mysql://localhost:3306/techwizzle";
    private final String user = "root";
    private final String password = "";
    
    private Connection connection;
    private Statement statement;
    
    public DbConnect(){
        try{
            Class.forName(driver);
            this.connection = DriverManager.getConnection(url, user, password);
            this.statement = connection.createStatement();
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
    }
    
    public Statement getStatement(){
        return this.statement;
    }
}
