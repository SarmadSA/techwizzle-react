package com.techwizzle.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DBConnect {
    //Constatnts
    private final String driver = "com.mysql.jdbc.Driver";  // This string should be changed according to connector's package and class name
                                                            // in this case Driver is the class-name, and the rest is the package name
    private final String url = "jdbc:mysql://localhost:3306/techwizzle";
    private final String user = "root";
    private final String password = "";

    private Connection connection;
    private Statement statement;

    public DBConnect(){
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
